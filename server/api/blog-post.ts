import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import matter from "gray-matter";
import type { Context } from "hono";

export interface BlogPostData {
  pageContent: string;
  title: string;
  date: Date;
  excerpt?: string;
  category?: string;
}

export async function GET(c: Context) {
  const language = c.req.query("lang") || "en";
  const slug = c.req.query("slug");

  if (!slug) {
    return c.json({ error: "Missing slug parameter" }, 400);
  }

  if (language !== "en" && language !== "jp") {
    return c.json({ error: "Invalid language parameter" }, 400);
  }

  try {
    // Fetch the markdown file via HTTP from the production domain
    const baseUrl = "https://channelsbox.dev";
    const fileUrl = `${baseUrl}/content/${language}/blog/${slug}.md`;
    const fileRes = await fetch(fileUrl);
    if (!fileRes.ok) {
      throw new Error(`Blog post not found: ${fileUrl}`);
    }
    const fileContent = await fileRes.text();
    const { data: frontmatter, content } = matter(fileContent);
    const pageContent = await marked(content);

    if (!pageContent) {
      throw new Error(`Content for blog post "${slug}" is empty`);
    }

    const postData: BlogPostData = {
      pageContent,
      title: frontmatter.title || slug,
      date: frontmatter.date ? new Date(frontmatter.date) : new Date(),
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
    };

    return c.json(postData);
  } catch (error) {
    console.error(`Blog post not found: ${language}/blog/${slug}.md`, error);
    return c.json({ error: `Blog post "${slug}" not found for language "${language}"` }, 404);
  }
}

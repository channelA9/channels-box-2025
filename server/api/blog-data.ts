import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { Context } from "hono";

export interface BlogArticle {
  title: string;
  date: Date;
  href: string;
  excerpt?: string;
  category?: string;
  slug: string;
}

export async function GET(c: Context) {
  const language = c.req.query("lang") || "en";

  if (language !== "en" && language !== "jp") {
    return c.json({ error: "Invalid language parameter" }, 400);
  }

  try {
    // Fetch the list of files via HTTP from the production domain
    const baseUrl = "https://your-production-domain.com";
    const indexUrl = `${baseUrl}/content/${language}/blog/`;
    const indexRes = await fetch(`${indexUrl}index.json`);
    if (!indexRes.ok) throw new Error("Failed to fetch blog index");
    const files = await indexRes.json();

    const articles: BlogArticle[] = await Promise.all(
      (files as string[])
        .filter((file: string) => file.endsWith(".md"))
        .map(async (file: string): Promise<BlogArticle> => {
          const slug = file.replace(".md", "");
          const fileUrl = `${indexUrl}${file}`;
          const fileRes = await fetch(fileUrl);
          if (!fileRes.ok) throw new Error(`Failed to fetch ${fileUrl}`);
          const fileContent = await fileRes.text();
          const { data: frontmatter } = matter(fileContent);

          const title = frontmatter.title || slug;
          const date = frontmatter.date ? new Date(frontmatter.date) : new Date();
          const href = `/blog/${slug}`;
          const excerpt = frontmatter.excerpt;
          const category = frontmatter.category;

          return { title, date, href, excerpt, category, slug };
        }),
    );

    const sortedArticles = articles.sort((a, b) => b.date.getTime() - a.date.getTime());

    return c.json({ articles: sortedArticles });
  } catch (error) {
    console.error(`Error loading blog data for ${language}:`, error);
    return c.json({ error: "Failed to load blog data", articles: [] }, 500);
  }
}

export type BlogPostData = {
  pageContent: string;
  title: string;
  date: Date;
  excerpt?: string;
  category?: string;
};

export async function data() {
  // Return empty data - client-side composables will handle loading
  return {
    pageContent: "",
    title: "",
    date: new Date(),
    excerpt: undefined,
    category: undefined,
  } as BlogPostData;
}

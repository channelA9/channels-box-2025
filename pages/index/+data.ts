export type RecentBlogPost = {
  title: string;
  date: Date;
  href: string;
  excerpt?: string;
  category?: string;
  slug: string;
};

export async function data() {
  // Return empty data - client-side composables will handle loading
  return { recentBlogPost: null };
}

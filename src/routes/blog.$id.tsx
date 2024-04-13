import { createFileRoute, notFound } from "@tanstack/react-router";

interface BlogModule {
  default: string;
}

export const Route = createFileRoute("/blog/$id")({
  loader: async ({ params: { id } }) => {
    const blogs = import.meta.glob<BlogModule>("../assets/blogs/*.md", {
      query: "?raw",
    });

    if (`../assets/blogs/${id}.md` in blogs) {
      const blog = (await blogs[`../assets/blogs/${id}.md`]()).default;
      return blog;
    } else {
      throw notFound();
    }
  },
});

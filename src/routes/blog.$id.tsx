import { createFileRoute, notFound } from "@tanstack/react-router"

const blogs = import.meta.glob<string>("../assets/blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

export const Route = createFileRoute("/blog/$id")({
  loader: async ({ params: { id } }) => {
    if (blogs[`../assets/blogs/${id}.md`]) {
      return blogs[`../assets/blogs/${id}.md`]
    } else {
      throw notFound()
    }
  },
})

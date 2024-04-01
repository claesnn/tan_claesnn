import { createLazyFileRoute } from "@tanstack/react-router"
import Markdown from "react-markdown"
import "@/assets/markdown.css"
import { blogs } from "@/assets/blogData"

export const Route = createLazyFileRoute("/blog/$id")({
  component: BlogDetail,
})

function BlogDetail() {
  const data = Route.useLoaderData()
  const { id } = Route.useParams()

  const blog = blogs.find((blog) => blog.slug === id)

  return (
    <article className='max-w-3xl mx-auto mt-6'>
      <span className='text-blue-700 uppercase text-sm mr-3'>
        {blog?.category}
      </span>
      <span className='text-slate-600'>{blog?.description}</span>
      <h1 className='font-[Kurale] text-7xl mt-2 mb-10'>{blog?.title}</h1>

      <Markdown className='markdown leading-relaxed'>{data}</Markdown>
    </article>
  )
}

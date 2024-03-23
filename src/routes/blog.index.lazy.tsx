import { Link, createLazyFileRoute } from "@tanstack/react-router"
import { blogs } from "@/assets/blogData"

export const Route = createLazyFileRoute("/blog/")({
  component: Blog,
})

function Blog() {
  return (
    <div>
      <h1 className='text-5xl font-[Kurale] my-5'>Blogs</h1>
      <ul className='space-y-3'>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              to='/blog/$id'
              params={{ id: blog.slug }}>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
              <p>{blog.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

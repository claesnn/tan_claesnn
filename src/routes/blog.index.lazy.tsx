import { Link, createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/blog/")({
  component: Blog,
})

function Blog() {
  return (
    <div>
      <h1 className='text-5xl font-[Kurale] my-5'>Blogs</h1>
      <ul className='space-y-3'>
        <li>
          <Link
            to='/blog/$id'
            params={{ id: "test-blog" }}>
            Blog 1
          </Link>
        </li>
        <li>
          <Link
            to='/blog/$id'
            params={{ id: "missing-blog" }}>
            Missing blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

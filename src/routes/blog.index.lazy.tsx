import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { blogs } from "@/assets/blogData";

export const Route = createLazyFileRoute("/blog/")({
  component: Blog,
});

function Blog() {
  function formatDate(input: string) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
  }

  return (
    <div className="mt-5">
      <ul className="max-w-3xl">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link to="/blog/$id" params={{ id: blog.slug }}>
              <p className="text-slate-500 text-sm uppercase">
                {formatDate(blog.date)}
              </p>
              <h1 className="font-[Kurale] text-4xl mb-2">{blog.title}</h1>
              <p className="text-slate-700">{blog.description}</p>
              <hr className="my-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

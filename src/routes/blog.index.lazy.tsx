import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { blogs, categories } from "@/assets/blogData";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LucideArrowDown, LucideArrowUp } from "lucide-react";

export const Route = createLazyFileRoute("/blog/")({
  component: Blog,
});

function Blog() {
  const [category, setCategory] = useState("");
  const [sorted, setSorted] = useState(true);

  function formatDate(input: string) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
  }

  // Filter blogs by category
  const filteredBlogs = category
    ? blogs.filter((blog) => blog.category === category)
    : blogs;

  // Sort blogs
  const multiplier = sorted ? 1 : -1;
  const sortedBlogs = filteredBlogs.sort(
    (a, b) => (Date.parse(a.date) - Date.parse(b.date)) * multiplier
  );

  return (
    <div className="mt-5 md:flex">
      <ul className="w-full">
        {/* Show blogs */}

        {sortedBlogs.map((blog) => (
          <li key={blog.slug}>
            <Link to="/blog/$id" params={{ id: blog.slug }}>
              <span className="text-slate-500 mr-3 text-xs uppercase">
                {formatDate(blog.date)}
              </span>
              <span className="text-blue-700 font-bold text-xs uppercase">
                {blog.category}
              </span>
              <h1 className="font-[Kurale] text-4xl mb-2">{blog.title}</h1>
              <p className="text-slate-700">{blog.description}</p>
              <hr className="my-4" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Filters Control */}
      <div className="md:w-80 md:ml-6">
        <h2 className="text-sm mb-2 text-slate-600 tracking-wider">FILTERS</h2>
        <div className="space-y-3">
          {/* Sorting */}

          <Button
            variant="outline"
            className="w-full"
            onClick={() => setSorted(!sorted)}
          >
            <span className="mr-2">Sort</span>{" "}
            {sorted ? (
              <LucideArrowDown size={16} />
            ) : (
              <LucideArrowUp size={16} />
            )}
          </Button>

          {/* Filter by Category */}
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" className="w-full" />
            </SelectTrigger>
            <SelectContent className="w-full">
              {categories.map((category) => (
                <SelectItem value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Reset filters */}
          {category && (
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                setCategory("");
                setSorted(true);
              }}
            >
              Reset
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

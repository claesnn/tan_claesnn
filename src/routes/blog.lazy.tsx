import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/blog")({
  component: Blog,
});

function Blog() {
  return <p>Blog</p>;
}

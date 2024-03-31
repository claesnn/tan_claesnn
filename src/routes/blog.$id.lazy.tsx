import { createLazyFileRoute } from "@tanstack/react-router";
import Markdown from "react-markdown";
import "@/assets/markdown.css";

export const Route = createLazyFileRoute("/blog/$id")({
  component: BlogDetail,
});

function BlogDetail() {
  const data = Route.useLoaderData();

  return (
    <>
      <Markdown className="markdown">{data}</Markdown>
    </>
  );
}

import { createLazyFileRoute } from "@tanstack/react-router"
import Markdown from "react-markdown"

//TODO: Use a markdown library that enables loading title and header

export const Route = createLazyFileRoute("/blog/$id")({
  component: BlogDetail,
})

function BlogDetail() {
  const data = Route.useLoaderData()

  return <Markdown>{data}</Markdown>
}

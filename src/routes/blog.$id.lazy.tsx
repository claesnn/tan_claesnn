import { createLazyFileRoute } from "@tanstack/react-router"
import Markdown from "react-markdown"

export const Route = createLazyFileRoute("/blog/$id")({
  component: BlogDetail,
})

function BlogDetail() {
  const data = Route.useLoaderData()

  return <Markdown>{data}</Markdown>
}

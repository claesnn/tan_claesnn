import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/biotech")({
  component: Biotech,
})

function Biotech() {
  return (
    <div>
      <h1>Biotech</h1>
    </div>
  )
}

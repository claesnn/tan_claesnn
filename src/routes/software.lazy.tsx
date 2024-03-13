import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/software")({
  component: Software,
});

function Software() {
  return <p>Software</p>;
}

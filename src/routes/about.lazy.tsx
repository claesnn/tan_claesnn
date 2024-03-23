import { createLazyFileRoute } from "@tanstack/react-router";
import { useHead } from "unhead";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  useHead({
    title: "About | Claes Nymand Nilsson",
  });
  return <div className="">Hello from About!</div>;
}

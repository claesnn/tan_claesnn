import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/photography/$id")({
  loader: ({ params: { id } }) => {
    const message = `Hello ${id}`;
    return {
      message,
    };
  },
});

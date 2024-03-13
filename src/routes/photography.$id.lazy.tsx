import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/photography/$id")({
  component: PhotographyDetail,
});

function PhotographyDetail() {
  const { id } = Route.useParams();
  return (
    <div className="flex justify-center">
      <img src={`/images/${id}-1280.webp`} className="max-h-screen" />
    </div>
  );
}

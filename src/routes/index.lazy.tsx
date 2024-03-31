import IndexBiotech from "@/components/IndexBiotech";
import IndexGame from "@/components/IndexGame";
import IndexIntro from "@/components/IndexIntro";
import IndexPhotos from "@/components/IndexPhotos";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { useHead } from "unhead";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  useHead({
    title: "Photography, Coding, Biotech & Coffee | Claes Nymand Nilsson",
  });
  return (
    <>
      <IndexIntro />

      <hr className="mt-10 mb-5"></hr>

      <Link to="/photography">
        <h1 className="font-[Kurale] text-4xl mb-4">Photography</h1>
      </Link>
      <IndexPhotos />

      <hr className="mt-10 mb-5"></hr>

      <Link to="/software">
        <h1 className="font-[Kurale] text-4xl mb-4">Software</h1>
      </Link>
      <IndexGame />

      <hr className="mt-10 mb-5"></hr>

      <Link to="/biotech">
        <h1 className="font-[Kurale] text-4xl mb-4">Biotech</h1>
      </Link>
      <IndexBiotech />
    </>
  );
}

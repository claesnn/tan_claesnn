import { Button } from "@/components/ui/button";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { useHead } from "unhead";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

type Photo = {
  id: number;
  width: number;
  height: number;
  alt: string;
};

const photos: Photo[] = [
  {
    id: 24,
    width: 1280,
    height: 853,
    alt: "A photo of a rock in the ocean in Iceland",
  },
  {
    id: 45,
    width: 1280,
    height: 853,
    alt: "A photo of a road with flowers on each side leading to a mountain in Iceland",
  },
  {
    id: 2,
    width: 1280,
    height: 1920,
    alt: "A photo of the adventure tower in south zealand",
  },
  {
    id: 7,
    width: 1280,
    height: 1920,
    alt: "A photo of the Geysir in Iceland",
  },
  {
    id: 38,
    width: 1280,
    height: 853,
    alt: "A photo of waterfalls in Iceland",
  },
  {
    id: 41,
    width: 1280,
    height: 853,
    alt: "A photo of the oldest church in Iceland with hayballs on the field",
  },
];

function Index() {
  useHead({
    title: "Photography, Coding, Biotech & Coffee | Claes Nymand Nilsson",
  });
  return (
    <>
      <h1 className="font-[Kurale] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 text-center">
        Hi, I'm Claes Nymand Nilsson
      </h1>
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex">
          <img
            src="/profile-pic-200.webp"
            width="80"
            height="80"
            className="h-20 w-20 rounded-[4rem] mr-5"
          />
          <p className="">
            I am Danish biotech scientist with a thousand side-hobbies. I have a
            passion for{" "}
            <Link to="/photography">
              <u>photography</u>
            </Link>
            ,{" "}
            <Link to="/software">
              <u>coding</u>
            </Link>
            , biotech and sports, amongst other things. I share my thoughts on
            those hobbies and the world at large through my{" "}
            <Link to="/blog">
              <u>blog</u>
            </Link>
            . Come follow along, when I dig into photo composition, python
            package management, javascript framework-wars and coffee tricks with
            diminishing returns.
          </p>
        </div>
        <div className="flex min-w-full justify-center mt-6">
          <Link to="/blog">
            <Button className="align-center px-8 py-4">
              Straight to the blog!
            </Button>
          </Link>
        </div>
      </div>

      <hr className="my-10"></hr>

      <Link to="/photography">
        <h1 className="font-[Kurale] text-5xl mb-10">Photography</h1>
      </Link>
      <div className="grid sm:grid-cols-2 gap-3">
        {photos.map((photo, index) => (
          <Link to="/photography/$id" params={{ id: String(photo.id) }}>
            <img
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading={index < 2 ? "eager" : "lazy"}
              srcSet={`/images/${photo.id}-200.webp 200w, /images/${photo.id}-420.webp 420w, /images/${photo.id}-420.webp 640w, /images/${photo.id}-640.webp 960w,/images/${photo.id}-640.webp 1280w`}
            />
          </Link>
        ))}
      </div>

      <hr className="my-10"></hr>

      <Link to="/software">
        <h1 className="font-[Kurale] text-5xl mb-10">Software</h1>
      </Link>
    </>
  );
}

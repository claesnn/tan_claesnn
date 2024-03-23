import { Link, createLazyFileRoute } from "@tanstack/react-router"
import { useHead } from "unhead"

export const Route = createLazyFileRoute("/photography/")({
  component: Photography,
})

function Photography() {
  useHead({
    title: "Photography | Claes Nymand Nilsson",
  })
  const IMAGE_COUNT = 54

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {[...Array(IMAGE_COUNT)].map((_, i) => (
        <Link
          to={`/photography/$id`}
          params={{ id: String(i) }}
          key={i}>
          <img
            src={`/images/${i}-640.webp`}
            loading={i < 6 ? "eager" : "lazy"}
          />
        </Link>
      ))}
    </div>
  )
}

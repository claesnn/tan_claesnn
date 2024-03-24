import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router"
import React, { Suspense } from "react"
import "../assets/index.css"
import { createHead } from "unhead"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Create a global head instance
//@ts-expect-error - head is never used
const head = createHead()

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <ScrollRestoration />
      <div className='min-h-screen'>
        <Header />
        <main className='px-4 my-2 max-w-7xl mx-auto'>
          <Outlet />
        </main>
      </div>
      <Footer />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
}

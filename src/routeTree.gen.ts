/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SoftwareLazyImport = createFileRoute('/software')()
const BlogLazyImport = createFileRoute('/blog')()
const BiotechLazyImport = createFileRoute('/biotech')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const PhotographyIndexLazyImport = createFileRoute('/photography/')()
const PhotographyIdLazyImport = createFileRoute('/photography/$id')()

// Create/Update Routes

const SoftwareLazyRoute = SoftwareLazyImport.update({
  path: '/software',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/software.lazy').then((d) => d.Route))

const BlogLazyRoute = BlogLazyImport.update({
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blog.lazy').then((d) => d.Route))

const BiotechLazyRoute = BiotechLazyImport.update({
  path: '/biotech',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/biotech.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const PhotographyIndexLazyRoute = PhotographyIndexLazyImport.update({
  path: '/photography/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/photography.index.lazy').then((d) => d.Route),
)

const PhotographyIdLazyRoute = PhotographyIdLazyImport.update({
  path: '/photography/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/photography.$id.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/biotech': {
      preLoaderRoute: typeof BiotechLazyImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      preLoaderRoute: typeof BlogLazyImport
      parentRoute: typeof rootRoute
    }
    '/software': {
      preLoaderRoute: typeof SoftwareLazyImport
      parentRoute: typeof rootRoute
    }
    '/photography/$id': {
      preLoaderRoute: typeof PhotographyIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/photography/': {
      preLoaderRoute: typeof PhotographyIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  BiotechLazyRoute,
  BlogLazyRoute,
  SoftwareLazyRoute,
  PhotographyIdLazyRoute,
  PhotographyIndexLazyRoute,
])

/* prettier-ignore-end */

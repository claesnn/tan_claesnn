It just **works**!

What a boring message, but nonetheless, one that has been uttered many times before by very clever men. But now, first, a little background, before we revisit this conclusion. This website, is my personal fun playground, where I share my photography, coding, and thoughts in-general. At the same time, it's also a place for experimentation. At work, the apps and tools I develop are required to be simple, use established technology, and be well-tested. For this fun-project, I'm allowing myself some more flexibility, so why on-earth did I chose something as _boring_ as React in 2024?

First of all, if you visit my [Github page](https://github.com/claesnn), you'll see a few repositories, all building this website using various technology. A few examples, include [Vue](https://github.com/claesnn/website) and [Nuxt](https://github.com/claesnn/nuxt-claesnn). I also began projects with Svelte and Solid, but those repositories didn't make it to GitHub (yet). I'd like to preface the next section, by saying that all those frameworks are excellent, and the maintainers have my upmost respect. The amount of energy poured into optimizing developer experience, performance, and community is mindblowing.

Now full disclosure, I'm no javascript expert or frontend guru, so take any conclusion I make with a grain of salt. I'm much more familiar with Python development these days, which by now feels like childsplay after having delved into the wasp-nest that is frontend development. Just the sheer amount of decisions that have gone into making something as basic as this site is dumbfounding. To give a quick taste, I can share that this site is built with: [React 18](https://react.dev/), [Vite](https://vitejs.dev/), [TanStack router](https://tanstack.com/router/latest), [TailwindCSS](https://tailwindcss.com/), [Shadcn](https://ui.shadcn.com/) ([RadixUI](https://www.radix-ui.com/)), [React-markdown](https://github.com/remarkjs/react-markdown), [cwebp](https://developers.google.com/speed/webp) for .WebP images, [Zod](https://zod.dev/) for validation, [React Hook Form](https://react-hook-form.com/) for forms, and .woff2 Google web fonts through [google-webfonts-helper](https://gwfh.mranftl.com/fonts).

In the next few sections, I'll go through some of my thoughts, right from selection of a basal javascript framework, to rendering modes, to UI components libraries and deployment.

## To framework or not to framework

Step 1 of starting a new project is choosing a framework - according to the [React docs](https://react.dev/learn/start-a-new-react-project), with some of the notable frameworks being Next.js (React), Remix (React), Nuxt (Vue), SvelteKit (Svelte) and SolidStart (Solid). To those new to frontend, the listed frameworks enable prerendering UI (at runtime or buildtime) and running code on the server (e.g. database queries) - if that's your thing.

For some time now, it seems like the main selling point has been prerendering UI, in order to showcase a UI to the user before javascript was downloaded and parsed. If your codebase is a large pile of sphagetti-code with a ton of complexity (such as Redux, Carousels and heavy UI component libraries), you may benefit from prerendering UI. For all others, you're just introducing a slower development server, a longer build-step, and higher costs (for runtime prerendering). You're even very likely to **slow** down your site if you use Node for runtime prerendering, due to a lack of HTTP/2 and HTTP/3 support.

The alternative selling point of these server-enabled frameworks, is the possibility for running database queries and thereby eliminate the backend REST API. As a happy Python coder, who enjoys the amazing developer experience in that language, I'm finding it incredibly difficult to imagine javascript on the backend for anything more complex than a basic to-do app. So whilst, the promise of locality of behaviour has me excited for full-stack projects, I'm betting more on Django-HTMX-Alpine or Go combinations to deliver in the future.

## Client-side rendering

Now, the observant reader may have picked up my preference for simplicity and client-side rendered apps.......

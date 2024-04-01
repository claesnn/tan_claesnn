export const categories = ["Javascript", "Python", "Photography"] as const

type Category = typeof categories[number]

type Blog = {
  title: string
  description: string
  date: string
  slug: string
  category: Category
  tags: string[]
}

export const blogs: Blog[] = [
  {
    title: "Why I chose React and TanStack in 2024",
    description: "React is dead. Long live React. Many have proclaimed the death of React, due to exciting new frameworks appearing, such as Svelte, Solid and Vue. After trying them all, I still went with React",
    date: "2024-03-31",
    slug: "why-i-chose-react-and-tanstack",
    category: "Javascript",
    tags: ["JavaScript", "React", "TanStack", "Frameworks"]
  },
  {
    title: "Yo yo yo!",
    description: "This is a test blog",
    date: "2021-08-02",
    slug: "yoyoyo",
    category: "Python",
    tags: [],
  },
]
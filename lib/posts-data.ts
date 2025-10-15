import type { PostData } from "./types"

// Static posts data for browser-based runtime
// In a real Next.js app, this would be read from markdown files using fs
export const postsData: PostData[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    date: "2022-10-16",
    image: "getting-started-nextjs.jpg",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    isFeatured: true,
    content: `# This is a title

This is some regular text with a [link](https://google.com)

## Getting Started

NextJS is a **React framework** for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.

## The Main Features

- Built-in Server-side Rendering (SSR)
- File-based Routing
- API Routes
- Image Optimization
- And much more!

\`\`\`js
function sayHello() {
  console.log('Hello World!')
}
\`\`\`

That's just a small excerpt of the features NextJS has to offer!`,
  },
  {
    slug: "mastering-javascript",
    title: "Mastering JavaScript",
    date: "2022-10-30",
    image: "mastering-js.jpg",
    excerpt:
      "JavaScript is the most important programming language for web development. You probably don't know it well enough!",
    isFeatured: false,
    content: `# Mastering JavaScript

JavaScript is the **most important programming language** for web development. You probably don't know it well enough!

## Why JavaScript?

JavaScript is the language of the web. It's the only language that runs natively in the browser.

### Key Concepts

1. Variables and Data Types
2. Functions and Scope
3. Objects and Arrays
4. Async Programming

\`\`\`js
const greeting = 'Hello World'
console.log(greeting)
\`\`\`

Keep learning and practicing!`,
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript",
    date: "2023-03-10",
    image: "mastering-typescript.png",
    excerpt:
      "TypeScript is a superset of JavaScript that adds static typing. Learn why it's becoming the standard for modern web development.",
    isFeatured: true,
    content: `# Mastering TypeScript

TypeScript is a **superset of JavaScript** that adds static typing to the language.

## Why TypeScript?

- Better IDE support
- Catch errors early
- Improved code documentation
- Enhanced refactoring

\`\`\`ts
interface User {
  name: string
  age: number
}

const user: User = {
  name: 'Max',
  age: 30
}
\`\`\`

TypeScript makes your code more maintainable!`,
  },
]

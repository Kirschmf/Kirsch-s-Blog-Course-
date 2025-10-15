import type { PostData } from "./types"
import { postsData } from "./posts-data"

// Browser-compatible version of posts utilities
// In a real Next.js app with Node.js, this would use fs to read markdown files

export function getPostsFiles() {
  return postsData.map((post) => `${post.slug}.md`)
}

export function getPostData(postIdentifier: string): PostData {
  const postSlug = postIdentifier.replace(/\.md$/, "")
  const post = postsData.find((p) => p.slug === postSlug)

  if (!post) {
    throw new Error(`Post not found: ${postSlug}`)
  }

  return post
}

export function getAllPosts(): PostData[] {
  const sortedPosts = [...postsData].sort((postA, postB) => (postA.date > postB.date ? -1 : 1))

  return sortedPosts
}

export function getFeaturedPosts(): PostData[] {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter((post) => post.isFeatured)

  return featuredPosts
}

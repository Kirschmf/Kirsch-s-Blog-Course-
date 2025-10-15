import Hero from "@/components/home-page/hero"
import FeaturedPosts from "@/components/home-page/featured-posts"
import { getFeaturedPosts } from "@/lib/posts-util"

export const metadata = {
  title: "Max' Blog",
  description: "I blog about web development",
}

export default function HomePage() {
  const featuredPosts = getFeaturedPosts()

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  )
}

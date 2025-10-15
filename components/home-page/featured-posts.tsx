import PostsGrid from "../posts/posts-grid"
import classes from "./featured-posts.module.css"
import type { PostData } from "@/lib/types"

interface FeaturedPostsProps {
  posts: PostData[]
}

function FeaturedPosts(props: FeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  )
}

export default FeaturedPosts

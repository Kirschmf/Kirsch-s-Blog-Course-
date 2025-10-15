import PostItem from "./post-item"
import classes from "./posts-grid.module.css"
import type { PostData } from "@/lib/types"

interface PostsGridProps {
  posts: PostData[]
}

function PostsGrid(props: PostsGridProps) {
  const { posts } = props

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostsGrid

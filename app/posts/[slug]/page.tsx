import PostContent from "@/components/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "@/lib/posts-util"

interface PostDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const postFilenames = getPostsFiles()
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""))

  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: PostDetailPageProps) {
  const { slug } = await params
  const postData = getPostData(slug)

  return {
    title: postData.title,
    description: postData.excerpt,
  }
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = await params
  const postData = getPostData(slug)

  return <PostContent post={postData} />
}

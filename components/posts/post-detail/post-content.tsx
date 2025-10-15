"use client"

import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import PostHeader from "./post-header"
import classes from "./post-content.module.css"
import type { PostData } from "@/lib/types"
import type { Components } from "react-markdown"

interface PostContentProps {
  post: PostData
}

function PostContent(props: PostContentProps) {
  const { post } = props

  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers: Components = {
    p(paragraph) {
      const { node } = paragraph

      if (
        node &&
        node.children &&
        node.children[0] &&
        "tagName" in node.children[0] &&
        node.children[0].tagName === "img"
      ) {
        const image = node.children[0] as any
        const { src, alt } = image.properties

        return (
          <div className={classes.image}>
            <Image src={src || "/placeholder.svg"} alt={alt || ""} width={600} height={300} />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { className, children } = code
      const language = className ? className.split("-")[1] : "text"

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent

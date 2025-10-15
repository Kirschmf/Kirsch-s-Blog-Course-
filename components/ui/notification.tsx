"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import classes from "./notification.module.css"

interface NotificationProps {
  title: string
  message: string
  status: string
}

function Notification(props: NotificationProps) {
  const { title, message, status } = props
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  let statusClasses = ""

  if (status === "success") {
    statusClasses = classes.success
  }

  if (status === "error") {
    statusClasses = classes.error
  }

  const cssClasses = `${classes.notification} ${statusClasses}`

  if (!mounted) {
    return null
  }

  const notificationsElement = document.getElementById("notifications")

  if (!notificationsElement) {
    return null
  }

  return createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    notificationsElement,
  )
}

export default Notification

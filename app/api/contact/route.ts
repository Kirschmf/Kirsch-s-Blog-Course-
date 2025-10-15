import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email, name, message } = await req.json()

  if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
    return NextResponse.json({ message: "Invalid input." }, { status: 422 })
  }

  const newMessage = {
    email,
    name,
    message,
    id: Date.now().toString(),
  }

  // In the course, this would connect to MongoDB
  // For now, we'll just log it
  console.log("New message received:", newMessage)

  return NextResponse.json({ message: "Successfully stored message!", data: newMessage }, { status: 201 })
}

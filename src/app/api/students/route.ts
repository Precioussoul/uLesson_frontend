import {NextResponse} from "next/server"
import {revalidatePath} from "next/cache"
import {students} from "@/app/db"

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url)

  const searchQuery = searchParams.get("search")?.toLowerCase()

  if (searchQuery) {
    const results = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery) ||
        student.registrationNumber.toLowerCase().includes(searchQuery) ||
        student.major.toLowerCase().includes(searchQuery) ||
        student.gpa === Number(searchQuery)
    )
    revalidatePath("/")
    return NextResponse.json({message: "Student found", data: results})
  }

  return NextResponse.json({message: "GET request received", data: students})
}

// Handle POST requests - Create a new student
export async function POST(req: Request) {
  const body = await req.json()
  const newstudent = {
    id: students.length + 1,
    ...body,
  }
  students.unshift(newstudent)

  revalidatePath("/")

  return NextResponse.json({
    message: "POST request received, student created",
    data: newstudent,
  })
}

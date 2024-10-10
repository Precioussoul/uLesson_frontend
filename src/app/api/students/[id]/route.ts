import {NextResponse} from "next/server"
import {students} from "../route"
// Handle GET request for a specific user
export async function GET(req: Request, {params}: {params: {id: string}}) {
  const user = students.find((student) => student.id === params.id) // Find the user by ID

  if (user) {
    return NextResponse.json({message: "Student found", data: user})
  } else {
    return NextResponse.json({message: `Student with id ${params.id} not found`}, {status: 404})
  }
}

import {NextResponse} from "next/server"
import {students} from "@/app/db"
import {revalidatePath} from "next/cache"

// Handle GET request for a specific user
export async function GET(req: Request, {params}: {params: {id: string}}) {
  const student = students.find((student) => student.id === params.id) // Find the student by ID

  if (student) {
    return NextResponse.json({message: "Student found", data: student})
  } else {
    return NextResponse.json({message: `Student with id ${params.id} not found`}, {status: 404})
  }
}

export async function PUT(req: Request, {params}: {params: {id: string}}) {
  const body = await req.json()
  const {name, registrationNumber, major, dob, gpa} = body

  const student = students.find((student) => student.id === params.id)
  if (student) {
    student.name = name
    student.registrationNumber = registrationNumber
    student.major = major
    student.dob = dob
    student.gpa = gpa

    revalidatePath("/")

    return NextResponse.json({
      message: "student record successfully updated",
      updatedData: student,
    })
  } else {
    return NextResponse.json({message: `student with id ${params.id} not found`}, {status: 404})
  }
}

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
  // Remove student by ID
  const studentIndex = students.findIndex((student) => student.id === params.id)
  if (studentIndex > -1) {
    const deletedstudent = students.splice(studentIndex, 1)[0]

    revalidatePath("/")

    return NextResponse.json({
      message: "student record successfully deleted",
      deletedData: deletedstudent,
    })
  } else {
    return NextResponse.json({message: `student with id ${params.id} not found`}, {status: 404})
  }
}

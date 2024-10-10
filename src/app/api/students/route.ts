import {NextResponse} from "next/server"

interface Student {
  id: string
  name: string
  registrationNumber: string
  major: string
  dob: string
  gpa: number
}

let students: Student[] = [
  {id: "1", name: "John Doe", registrationNumber: "202401234", major: "Computer Science", dob: "2001-05-05", gpa: 3.8},
  {id: "2", name: "Jane Smith", registrationNumber: "202401235", major: "Mathematics", dob: "2000-08-15", gpa: 3.9},
  {id: "3", name: "Alice Johnson", registrationNumber: "202401236", major: "Physics", dob: "2002-01-20", gpa: 3.7},
  {id: "4", name: "Bob Brown", registrationNumber: "202401237", major: "Chemistry", dob: "2001-11-30", gpa: 3.6},
  {id: "5", name: "Charlie Davis", registrationNumber: "202401238", major: "Biology", dob: "2000-03-25", gpa: 3.5},
  {id: "6", name: "Diana Evans", registrationNumber: "202401239", major: "Engineering", dob: "2001-07-10", gpa: 3.8},
  {id: "7", name: "Ethan Foster", registrationNumber: "202401240", major: "Economics", dob: "2002-09-05", gpa: 3.9},
  {id: "8", name: "Fiona Green", registrationNumber: "202401241", major: "History", dob: "2000-12-12", gpa: 3.7},
  {id: "9", name: "George Harris", registrationNumber: "202401242", major: "Philosophy", dob: "2001-04-18", gpa: 3.6},
  {id: "10", name: "Hannah White", registrationNumber: "202401243", major: "Literature", dob: "2002-06-22", gpa: 3.5},
]

export async function GET() {
  return NextResponse.json({message: "GET request received", data: students})
}

// Handle POST requests - Create a new student
export async function POST(req: Request) {
  const body = await req.json()
  const newstudent = {
    id: students.length + 1,
    ...body,
  }
  students.push(newstudent)

  return NextResponse.json({
    message: "POST request received, student created",
    data: newstudent,
  })
}

export async function PUT(req: Request) {
  const body = await req.json()
  const {id, name} = body

  const student = students.find((student) => student.id === id)
  if (student) {
    student.name = name
    return NextResponse.json({
      message: "student record successfully updated",
      updatedData: student,
    })
  } else {
    return NextResponse.json({message: `student with id ${id} not found`}, {status: 404})
  }
}

export async function DELETE(req: Request) {
  const body = await req.json()
  const {id} = body

  // Remove student by ID
  const studentIndex = students.findIndex((student) => student.id === id)
  if (studentIndex > -1) {
    const deletedstudent = students.splice(studentIndex, 1)[0]

    return NextResponse.json({
      message: "student record successfully deleted",
      deletedData: deletedstudent,
    })
  } else {
    return NextResponse.json({message: `student with id ${id} not found`}, {status: 404})
  }
}

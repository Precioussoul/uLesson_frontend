import {NextResponse} from "next/server"
import {Student} from "@/types"
import {revalidatePath} from "next/cache"

export let students: Student[] = [
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

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url)

  // Extract query parameters (e.g., id, name)
  const searchQuery = searchParams.get("search")?.toLowerCase() || ""

  console.log("search", searchQuery)

  if (searchQuery) {
    const results = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery) ||
        student.registrationNumber.toLowerCase().includes(searchQuery) ||
        student.major.toLowerCase().includes(searchQuery) ||
        student.gpa === Number(searchQuery)
    )
    console.log("results", results)
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

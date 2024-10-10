import {NextResponse} from "next/server"

let users = [
  {id: 1, name: "John Doe"},
  {id: 2, name: "Jane Smith"},
]

export async function GET() {
  return NextResponse.json({message: "GET request received", data: users})
}

// Handle POST requests - Create a new user
export async function POST(req: Request) {
  const body = await req.json()
  const newUser = {
    id: users.length + 1,
    ...body,
  }
  users.push(newUser)

  return NextResponse.json({
    message: "POST request received, user created",
    data: newUser,
  })
}

export async function PUT(req: Request) {
  const body = await req.json()
  const {id, name} = body

  const user = users.find((user) => user.id === id)
  if (user) {
    user.name = name
    return NextResponse.json({
      message: "PUT request received, user updated",
      updatedData: user,
    })
  } else {
    return NextResponse.json({message: `User with id ${id} not found`}, {status: 404})
  }
}

export async function DELETE(req: Request) {
  const body = await req.json()
  const {id} = body

  // Remove user by ID
  const userIndex = users.findIndex((user) => user.id === id)
  if (userIndex > -1) {
    const deletedUser = users.splice(userIndex, 1)[0]

    return NextResponse.json({
      message: "DELETE request received, user deleted",
      deletedData: deletedUser,
    })
  } else {
    return NextResponse.json({message: `User with id ${id} not found`}, {status: 404})
  }
}

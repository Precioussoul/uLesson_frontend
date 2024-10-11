import {NextResponse} from "next/server"
//TODO: starter code for API configuration
export async function GET(req: Request) {
  return NextResponse.json({message: "Hello world"})
}

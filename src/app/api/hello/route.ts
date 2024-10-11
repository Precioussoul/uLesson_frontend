import {NextResponse} from "next/server"
//Tips: starter code for API configuration
export async function GET(req: Request) {
  return NextResponse.json({message: "Hello world"})
}

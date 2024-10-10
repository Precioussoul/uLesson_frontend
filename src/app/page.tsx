import Image from "next/image"

async function getStudentsRecord() {
  const response = await fetch("http:localhost:3000/api/students")
  const data = await response.json()

  return data
}

async function Home() {
  console.log("students", await getStudentsRecord())

  return <div className=''>Home</div>
}

export default Home

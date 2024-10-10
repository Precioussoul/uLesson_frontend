"use server"

import Navbar from "@/components/Navbar"
import StudentStats from "@/components/StudentStats"
import StudentsTable from "@/components/Table"

async function getStudentsRecord() {
  const response = await fetch("http:localhost:3000/api/students", {cache: "no-store"})
  const data = await response.json()

  return data
}

async function Home() {
  const studentsRecord = await getStudentsRecord()
  console.log("students", studentsRecord)

  return (
    <div className='w-full bg-white p-4'>
      <Navbar />
      <div className='container mx-auto mt-10 flex flex-col gap-8 '>
        <div className=''>
          <StudentStats />
        </div>
        <StudentsTable data={studentsRecord} />
      </div>
    </div>
  )
}

export default Home

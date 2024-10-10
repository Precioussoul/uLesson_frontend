import GoBackBtn from "@/components/GoBackBtn"
import {Student} from "@/types"

async function getStudentDetail(id: string | number) {
  try {
    const response = await fetch(`http://localhost:3000/api/students/${id}`)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    const student: Student = data.data
    return student
  } catch (error) {
    console.error("Failed to fetch student info:", error)
  }
}

const StudentDetailsPage = async ({params}: {params: {id: string | number}}) => {
  const student = await getStudentDetail(params.id)

  return (
    <div className='container mx-auto p-4'>
      <GoBackBtn />
      {student ? (
        <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 mt-6 border-blue-500 min-h-[120px]'>
          <div className='flex flex-col border-b border-gray-100 last:border-none py-2'>
            <h2 className='font-medium'>Name</h2>
            <span className='text-sm text-gray-500'>{student.name}</span>
          </div>
          <div className='flex flex-col border-b border-gray-100 last:border-none py-2'>
            <h2 className='font-medium'>Date of birth</h2>
            <span className='text-sm text-gray-500'>{student.dob}</span>
          </div>
          <div className='flex flex-col border-b border-gray-100 last:border-none py-2'>
            <h2 className='font-medium'>Registration number</h2>
            <span className='text-sm text-gray-500'>{student.registrationNumber}</span>
          </div>
          <div className='flex flex-col border-b border-gray-100 last:border-none py-2'>
            <h2 className='font-medium'>Major/Discipline</h2>
            <span className='text-sm text-gray-500'>{student.major}</span>
          </div>
          <div className='flex flex-col border-b border-gray-100 last:border-none py-2'>
            <h2 className='font-medium'>GPA</h2>
            <span className='text-sm text-gray-500'>{student.gpa}</span>
          </div>
        </div>
      ) : (
        <div className=''>loading....</div>
      )}
    </div>
  )
}

export default StudentDetailsPage

import React from "react"

const StudentStats = () => {
  return (
    <div className='grid grid-cols-4 gap-8'>
      <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 border-blue-500 min-h-[120px]'>
        <h2 className=''>Department</h2>
        <span className='text-lg font-bold'>Computer science</span>
      </div>
      <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 border-blue-500 min-h-[120px]'>
        <h2 className=''>Lecturers</h2>
        <span className='text-lg font-bold'>15</span>
      </div>
      <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 border-blue-500 min-h-[120px]'>
        <h2 className=''>Faculty</h2>
        <span className='text-lg font-bold'>Apply Science</span>
      </div>
      <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 border-blue-500 min-h-[120px]'>
        <h2 className=''>Students</h2>
        <span className='text-lg font-bold'>210</span>
      </div>
    </div>
  )
}

export default StudentStats

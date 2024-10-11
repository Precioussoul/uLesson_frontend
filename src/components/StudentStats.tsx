import React from "react"

const StudentStats = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 border-blue-500 min-h-[120px]'>
        <h2 className=''>Departments</h2>
        <span className='text-lg font-bold'>All</span>
      </div>
      <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 border-blue-500 min-h-[120px]'>
        <h2 className=''>Lecturers</h2>
        <span className='text-lg font-bold'>25</span>
      </div>
      <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 border-blue-500 min-h-[120px]'>
        <h2 className=''>Faculty</h2>
        <span className='text-lg font-bold'>All</span>
      </div>
      <div className='shadow-md rounded-lg flex flex-col gap-3 p-4 border-l-4 border-blue-500 min-h-[120px]'>
        <h2 className=''>Students</h2>
        <span className='text-lg font-bold'>2100</span>
      </div>
    </div>
  )
}

export default StudentStats

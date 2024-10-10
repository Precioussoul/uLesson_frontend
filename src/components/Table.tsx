"use client"
import React, {useState} from "react"
import {Table, Thead, Tbody, Tr, Th, Td, TableContainer} from "@chakra-ui/react"
import {MdDelete, MdEdit, MdEditNote, MdOutlineDelete, MdOutlineEdit} from "react-icons/md"
import EditStudentModal from "./EditStudentModal"

interface Student {
  id: string
  name: string
  registrationNumber: string
  major: string
  dob: string
  gpa: number
}
interface StudentsTableProps {
  data: {
    message: string
    data: Student[]
  }
}

const StudentsTable = ({data}: StudentsTableProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleStudentDelete = (id: string | number) => {}
  const handleEditStudent = (id: string | number) => {
    setIsOpen(true)
  }

  console.log("Student", data)

  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Thead backgroundColor={"gray.200"}>
            <Tr>
              <Th>Name</Th>
              <Th>Registration Number</Th>
              <Th>Major</Th>
              <Th>Date of Birth</Th>
              <Th>GPA</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.data.length > 0 &&
              data.data.map((student, idx) => (
                <Tr key={idx}>
                  <Td>{student.name}</Td>
                  <Td>{student.registrationNumber}</Td>
                  <Td>{student.major}</Td>
                  <Td>{student.dob}</Td>
                  <Td>{student.gpa}</Td>
                  <Td>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center justify-center border border-gray-200 rounded-lg p-2'>
                        <MdOutlineEdit size={20} onClick={() => handleEditStudent(student.id)} />
                      </div>
                      <div className='flex items-center justify-center border border-gray-200 rounded-lg p-2'>
                        <MdOutlineDelete size={20} onClick={() => handleStudentDelete(student.id)} />
                      </div>
                    </div>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <EditStudentModal isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)} />
    </>
  )
}

export default StudentsTable

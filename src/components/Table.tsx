"use client"
import React, {useCallback, useState} from "react"
import {Table, Thead, Tbody, Tr, Th, Td, TableContainer} from "@chakra-ui/react"
import {MdOutlineDelete, MdOutlineEdit} from "react-icons/md"
import EditStudentModal from "./EditStudentModal"
import DeleteStudentModal from "./DeleteStudentModal"
import {useAppContext} from "@/context/AppContext"
import {FaExternalLinkAlt} from "react-icons/fa"
import Link from "next/link"

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
  const {students, isSearching} = useAppContext()
  const [isOpen, setIsOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const [student, setStudent] = useState<Student>()
  const [studentId, setStudentId] = useState<string | number>(0)

  const getStudentInfo = useCallback(async (id: string | number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/students/${id}`)
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      const student: Student = data.data
      setStudent(student)
    } catch (error) {
      console.error("Failed to fetch student info:", error)
    }
  }, [])

  const handleStudentDelete = (id: string | number) => {
    setOpenDelete(true)
    setStudentId(id)
  }
  const handleEditStudent = (id: string | number) => {
    setIsOpen(true)
    getStudentInfo(id)
  }

  const results = isSearching ? students : data.data

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
            {results.length > 0 &&
              results.map((student, idx) => (
                <Tr key={idx}>
                  <Td>{student.name}</Td>
                  <Td>{student.registrationNumber}</Td>
                  <Td>{student.major}</Td>
                  <Td>{student.dob}</Td>
                  <Td>{student.gpa}</Td>
                  <Td>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center justify-center border border-gray-200 rounded-lg p-2 cursor-pointer'>
                        <MdOutlineEdit size={20} onClick={() => handleEditStudent(student.id)} />
                      </div>
                      <div className='flex items-center justify-center border border-gray-200 rounded-lg p-2 cursor-pointer'>
                        <MdOutlineDelete size={20} onClick={() => handleStudentDelete(student.id)} />
                      </div>

                      <Link
                        href={`/students/${student.id}`}
                        className='flex items-center justify-center border border-gray-200 rounded-lg p-2 cursor-pointer'
                      >
                        <FaExternalLinkAlt size={15} />
                      </Link>
                    </div>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <EditStudentModal isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)} student={student} />
      <DeleteStudentModal isOpen={openDelete} onClose={() => setOpenDelete((prev) => !prev)} studentId={studentId} />
    </>
  )
}

export default StudentsTable

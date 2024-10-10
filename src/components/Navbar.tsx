"use client"
import {Button, Input, InputGroup, InputLeftElement} from "@chakra-ui/react"
import {MdOutlineSearch} from "react-icons/md"
import {LuUserPlus2} from "react-icons/lu"
import AddStudentModal from "./AddStudentModal"
import {useState} from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full bg-white p-4 border-b border-gray-200'>
      <nav className='container mx-auto flex items-center justify-between'>
        <div className=''>
          <h2 className='font-semibold text-black text-2xl'>ULesson</h2>
        </div>
        <div className='flex items-center gap-4 w-1/2'>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <MdOutlineSearch color='gray.300' />
            </InputLeftElement>
            <Input type='text' placeholder='Search....' borderRadius={8} outline={0} />
          </InputGroup>

          <Button onClick={() => setIsOpen(true)} leftIcon={<LuUserPlus2 />} className='!bg-blue-600 !text-white' variant='solid' minWidth={"auto"}>
            Add student
          </Button>
        </div>
      </nav>
      <AddStudentModal isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)} />
    </div>
  )
}

export default Navbar

"use client"
import {Button, Input, InputGroup, InputLeftElement} from "@chakra-ui/react"
import {MdOutlineSearch} from "react-icons/md"
import {LuUserPlus2} from "react-icons/lu"
import AddStudentModal from "./AddStudentModal"
import {useEffect, useState} from "react"
import {useRouter} from "next/navigation"
import {useAppContext} from "@/context/AppContext"
import Link from "next/link"

const Navbar = () => {
  const {getSearchInput} = useAppContext()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    getSearchInput(searchInput)
    router.refresh()
  }, [searchInput])

  return (
    <div className='w-full bg-white p-4 border-b border-gray-200'>
      <nav className='container mx-auto flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
        <Link href={"/"} className=''>
          <h2 className='font-semibold text-black text-2xl'>ULesson</h2>
        </Link>
        <div className='flex flex-col w-full md:flex-row md:items-center gap-4 md:w-1/2'>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <MdOutlineSearch color='gray.300' />
            </InputLeftElement>
            <Input
              type='text'
              placeholder='Search....'
              value={searchInput}
              borderRadius={8}
              outline={0}
              onChange={(e) => setSearchInput(e.target.value)}
            />
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

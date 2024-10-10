"use client"
import React from "react"
import {Button} from "@chakra-ui/react"
import {MdArrowBack} from "react-icons/md"
import {useRouter} from "next/navigation"

const GoBackBtn = () => {
  const router = useRouter()
  return (
    <Button onClick={() => router.push("/")} leftIcon={<MdArrowBack />} className='!bg-blue-600 !text-white' variant='solid' minWidth={"auto"}>
      Go back
    </Button>
  )
}

export default GoBackBtn

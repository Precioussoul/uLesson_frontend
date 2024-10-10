"use client"
import {useEffect} from "react"
import {useRouter} from "next/navigation"

const StudentDefaultPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
  }, [])

  return <div>StudentDefaultPage</div>
}

export default StudentDefaultPage

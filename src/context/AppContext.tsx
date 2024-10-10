import React, {createContext, useContext, useState, ReactNode, useEffect} from "react"

interface Student {
  id: string
  name: string
  registrationNumber: string
  major: string
  dob: string
  gpa: number
}

interface AppContextProps {
  students: Student[]
  getSearchInput: (search: string) => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider = ({children}: {children: ReactNode}) => {
  const [students, setStudents] = useState<Student[]>([])

  const getSearchInput = async (searchInput: string) => {
    const response = await fetch(`http://localhost:3000/api/students?search=${searchInput}`)
    const data = await response.json()
    const searchResults = data.data
    setStudents(searchResults)
  }

  return <AppContext.Provider value={{students, getSearchInput}}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

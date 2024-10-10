"use client"

import {ChakraProvider} from "@chakra-ui/react"
import {AppProvider} from "@/context/AppContext"

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      <AppProvider>{children}</AppProvider>
    </ChakraProvider>
  )
}

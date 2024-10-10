"use client"
import React, {useCallback} from "react"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Skeleton, Stack, Button} from "@chakra-ui/react"
import {useRouter} from "next/navigation"

interface DeleteStudentModal {
  onClose: () => void
  isOpen: boolean
  studentId: string | number
}

const DeleteStudentModal = ({isOpen, onClose, studentId}: DeleteStudentModal) => {
  const router = useRouter()
  const deleteStudentInfo = useCallback(async (id: any) => {
    await fetch(`http://localhost:3000/api/students/${id}`, {
      method: "DELETE",
    })
  }, [])

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={18}>Confirm Deletion?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {studentId ? (
            <div className='flex flex-col gap-4'>
              <h3 className='font-medium'>Are you sure you want to delete this student record?</h3>
              <div className='flex items-center gap-4 justify-end p-4'>
                <Button variant={"outline"}>Cancel</Button>
                <Button
                  onClick={() => {
                    deleteStudentInfo(studentId)
                    onClose()
                    router.refresh()
                  }}
                  variant={"solid"}
                  colorScheme={"red"}
                >
                  Delete
                </Button>
              </div>
            </div>
          ) : (
            <Stack padding={20}>
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </Stack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default DeleteStudentModal

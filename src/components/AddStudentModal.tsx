"use client"
import React from "react"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure} from "@chakra-ui/react"

interface AddStudentModal {
  onClose: () => void
  isOpen: boolean
}

const AddStudentModal = ({isOpen, onClose}: AddStudentModal) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt unde nemo possimus fugit laborum ipsum voluptatibus perspiciatis eos?
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddStudentModal

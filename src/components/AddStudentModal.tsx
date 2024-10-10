"use client"
import React from "react"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input} from "@chakra-ui/react"

interface AddStudentModal {
  onClose: () => void
  isOpen: boolean
}

const AddStudentModal = ({isOpen, onClose}: AddStudentModal) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <Input type='text' placeholder='Enter first name and last name' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='registrationNumber'>
                Registration Number
              </label>
              <Input type='text' placeholder='Enter registration number' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='major'>
                Major
              </label>
              <Input type='text' placeholder='e.g Computer Engineering ' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='dob'>
                Date of Birth
              </label>
              <Input type='date' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='gpa'>
                GPA
              </label>
              <Input type='number' placeholder='Enter GPA' />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none  ' type='button' onClick={onClose}>
            Save
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddStudentModal

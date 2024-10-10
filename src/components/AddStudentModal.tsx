"use client"
import React, {useCallback} from "react"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input} from "@chakra-ui/react"
import {useFormik} from "formik"
import {validationStudentUpdateSchema} from "@/utils/validateSchemas"
import {useRouter} from "next/navigation"

interface AddStudentModal {
  onClose: () => void
  isOpen: boolean
}

const AddStudentModal = ({isOpen, onClose}: AddStudentModal) => {
  const router = useRouter()
  const addStudentInfo = useCallback(async (data: any) => {
    await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
  }, [])

  // Initial form values
  const initialValues = {
    name: "",
    registrationNumber: "",
    major: "",
    dob: "",
    gpa: "",
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validationStudentUpdateSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values) // Handle form submission
      addStudentInfo(values)
      onClose()
      router.refresh()
    },
    enableReinitialize: true, // Allows reinitializing when initialValues change
  })
  const {handleBlur, handleChange, touched, values, errors, handleSubmit} = formik

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <Input
                type='text'
                name='name'
                value={values.name}
                placeholder='Enter first name and last name'
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.name}
              />
              {touched.name && errors.name ? <div className='text-red-500 text-xs'>{errors.name}</div> : null}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='registrationNumber'>
                Registration Number
              </label>
              <Input
                type='text'
                name='registrationNumber'
                value={values.registrationNumber}
                placeholder='Enter registration number'
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.registrationNumber}
              />
              {touched.registrationNumber && errors.registrationNumber ? <div className='text-red-500 text-xs'>{errors.registrationNumber}</div> : null}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='major'>
                Major
              </label>
              <Input
                type='text'
                name='major'
                value={values.major}
                placeholder='e.g Computer Engineering '
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.major}
              />
              {touched.major && errors.major ? <div className='text-red-500 text-xs'>{errors.major}</div> : null}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='dob'>
                Date of Birth
              </label>
              <Input type='date' name='dob' value={values.dob} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.dob} />
              {touched.dob && errors.dob ? <div className='text-red-500 text-xs'>{errors.dob}</div> : null}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='gpa'>
                GPA
              </label>
              <Input
                type='number'
                name='gpa'
                value={values.gpa}
                placeholder='Enter GPA'
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.gpa}
              />
              {touched.gpa && errors.gpa ? <div className='text-red-500 text-xs'>{errors.gpa}</div> : null}
            </div>
            <div className='flex justify-end my-4'>
              <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>
                Save
              </button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddStudentModal

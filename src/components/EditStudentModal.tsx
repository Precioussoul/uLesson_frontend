"use client"
import React, {useCallback} from "react"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input} from "@chakra-ui/react"
import {Student} from "@/types"
import {Skeleton, Stack} from "@chakra-ui/react"
import {Formik, Form, useFormik} from "formik"
import {validationStudentUpdateSchema} from "@/utils/validateSchemas"
import {useRouter} from "next/navigation"
interface EditStudentModal {
  onClose: () => void
  isOpen: boolean
  student?: Student
}

const EditStudentModal = ({isOpen, onClose, student}: EditStudentModal) => {
  const router = useRouter()
  const editStudentInfo = useCallback(async (data: any) => {
    await fetch(`http://localhost:3000/api/students/${data.id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
  }, [])

  // Initial form values
  const initialValues = {
    id: student?.id,
    name: student?.name,
    registrationNumber: student?.registrationNumber,
    major: student?.major,
    dob: student?.dob,
    gpa: student?.gpa,
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validationStudentUpdateSchema,
    onSubmit: (values) => {
      editStudentInfo(values)
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
        <ModalHeader>Edit Student</ModalHeader>
        <ModalCloseButton />
        {student ? (
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
        ) : (
          <Stack padding={20}>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
        )}
      </ModalContent>
    </Modal>
  )
}

export default EditStudentModal

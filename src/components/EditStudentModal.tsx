"use client"
import React, {useCallback} from "react"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input} from "@chakra-ui/react"
import {Student} from "@/types"
import {Skeleton, Stack} from "@chakra-ui/react"
import {Formik, Field, Form, ErrorMessage} from "formik"
import {validationStudentUpdateSchema} from "@/utils/validateSchemas"
interface EditStudentModal {
  onClose: () => void
  isOpen: boolean
  student?: Student
}

const EditStudentModal = ({isOpen, onClose, student}: EditStudentModal) => {
  const editStudentInfo = useCallback(async (data: any) => {
    await fetch("http://localhost:3000/api/student", {
      method: "PUT",
      body: JSON.stringify(data),
    })
  }, [])

  // Initial form values
  const initialValues = {
    name: student?.name,
    registrationNumber: student?.registrationNumber,
    major: student?.major,
    dob: student?.dob,
    gpa: student?.gpa,
  }

  // Handle form submission
  const onSubmit = (values: any) => {
    console.log("Form Data", values) // You can replace this with an API call
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Student</ModalHeader>
        <ModalCloseButton />
        {student ? (
          <ModalBody>
            <Formik enableReinitialize initialValues={initialValues} validationSchema={validationStudentUpdateSchema} onSubmit={onSubmit}>
              {({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
                <Form>
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
                    {touched.registrationNumber && errors.registrationNumber ? (
                      <div className='text-red-500 text-xs'>{errors.registrationNumber}</div>
                    ) : null}
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
                </Form>
              )}
            </Formik>
          </ModalBody>
        ) : (
          <Stack padding={20}>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
        )}
        <ModalFooter>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none  ' type='button'>
            Save
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditStudentModal

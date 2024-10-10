import * as Yup from "yup"

// Validation schema using Yup
export const validationStudentUpdateSchema = Yup.object({
  name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  registrationNumber: Yup.string().email("Invalid email address").required("Email is required"),
  major: Yup.string().required("Major is required").min(2, "Major must be at least 2 characters"),
  dob: Yup.string().required("Date of birth is required").min(10, "Date of birth must be in the format YYYY-MM-DD"),
  gpa: Yup.number().required("GPA is required").min(0, "GPA must be at least 0").max(4, "GPA must be at most 4"),
})

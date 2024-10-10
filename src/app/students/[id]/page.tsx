async function getStudentDetail(id: string | number) {
  //
}

const StudentDetailsPage = async ({params}: {params: {id: string | number}}) => {
  const result = await getStudentDetail(params.id)

  return <div>StudentDetailsPage</div>
}

export default StudentDetailsPage

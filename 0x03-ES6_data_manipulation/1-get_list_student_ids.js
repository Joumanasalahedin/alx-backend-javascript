export default function getListStudentIds(studentArray) {
  if (Array.isArray(studentArray)) {
    return studentArray.map((student) => student.id);
  }
  return [];
}

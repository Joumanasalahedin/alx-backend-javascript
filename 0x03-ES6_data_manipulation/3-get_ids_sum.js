export default function getStudentIdsSum(students) {
  const studentIds = students.reduce(
    (sum, currentStudent) => currentStudent.id + sum, 0,
  );
  return studentIds;
}

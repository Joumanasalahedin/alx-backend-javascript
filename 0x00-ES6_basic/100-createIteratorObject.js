export default function createIteratorObject(report) {
  function* nameIterator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
  return { [Symbol.iterator]: nameIterator };
}

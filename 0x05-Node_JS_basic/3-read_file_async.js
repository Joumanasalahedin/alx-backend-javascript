const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.trim().split('\n');
        const header = lines.shift();

        if (!header || header.split(',').length !== 4) {
          throw new Error('Invalid CSV format');
        }

        const students = {};
        let totalStudents = 0;

        lines.forEach((line) => {
          if (!line.trim()) return;

          const [firstname, , , field] = line.split(',');

          if (!field) return;

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
          totalStudents += 1;
        });

        console.log(`Number of students: ${totalStudents}`);
        Object.entries(students).forEach(([field, names]) => {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        resolve();
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;

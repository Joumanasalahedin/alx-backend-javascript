const express = require('express');
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

        let output = `Number of students: ${totalStudents}\n`;
        Object.entries(students).forEach(([field, names]) => {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        });

        resolve(output.trim());
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.status(500).send('Database path is required as a command-line argument');
    return;
  }

  res.write('This is the list of our students\n');

  countStudents(databasePath)
    .then((output) => {
      res.end(output);
    })
    .catch((err) => {
      res.end(err.message);
    });
});

app.listen(1245, () => {
  console.log('Server running on http://localhost:1245');
});

module.exports = app;

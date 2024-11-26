import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b));

      let output = 'This is the list of our students\n';
      fields.forEach((field) => {
        const count = students[field].length;
        const names = students[field].join(', ');
        output += `Number of students in ${field}: ${count}. List: ${names}\n`;
      });

      res.status(200).send(output.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      const allowedMajors = ['CS', 'SWE'];

      if (!allowedMajors.includes(major)) {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);

      const names = students[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

export default StudentsController;

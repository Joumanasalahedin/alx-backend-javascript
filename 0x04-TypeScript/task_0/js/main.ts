interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Joumana",
    lastName: "Arafa",
    age: 20,
    location: "Germany",
};

const student2: Student = {
    firstName: "Jason",
    lastName: "Stephen",
    age: 22,
    location: "Spain",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement('tr');

    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

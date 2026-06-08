// TODO: Create a multiline string using template literals
const greeting = `Hello Adam.
Welcome to the world of JavaScript!`;

// TODO: Create a function that uses template literals for HTML generation
function createCard(name, course) {
  return `
   <div class="card">
     <h2>${name}</h2>
     <p>${course}</p>
   </div>
  `;
}

// TODO: Convert regular functions to arrow functions
const greet = (name) => {
  return `hello ${name}`;
}

// TODO: Use arrow functions with array methods
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 }
]

const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;

use('SigmaDatabase');

// Insert a few documents into the cources collection.
db.getCollection('cources').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "instructor": "Rahul"
  },
  {
    "name": "JavaScript",
    "price": 15000,
    "instructor": "Amit"
  },
  {
    "name": "Node.js",
    "price": 18000,
    "instructor": "Neha"
  },
  {
    "name": "React",
    "price": 22000,
    "instructor": "Priya"
  },
  {
    "name": "Flutter",
    "price": 25000,
    "instructor": "Kunal"
  },
  {
    "name": "HTML & CSS",
    "price": 8000,
    "instructor": "Sneha"
  },
  {
    "name": "MongoDB",
    "price": 17000,
    "instructor": "Vikas"
  },
  {
    "name": "Python",
    "price": 19000,
    "instructor": "Anjali"
  },
  {
    "name": "C++",
    "price": 14000,
    "instructor": "Rohit"
  },
  {
    "name": "Full Stack Web Development",
    "price": 30000,
    "instructor": "Rahul"
  }
]);


// Print a message to the output window.
console.log(`Done inserting documents into the cources collection!`);

const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Mostafa", age: 22 },
    { id: 3, name: "Ahmed", age: 21 },
    { id: 4, name: "Sara", age: 19 }
];

let courses = [
    { id: 1, title: "Web Services" },
    { id: 2, title: "Database" },
    { id: 3, title: "Operating Systems" },
    { id: 4, title: "Data Structures" }
];

app.use((req, res, next) => {
    console.log(`layer: ${req.method} ${req.url}`);
    next();
});

//--------------
app.get("/students", (req, res) => {
    res.status(200).json(students);
});
//-------------
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

//-------------
app.post("/students", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: "name and age are required" });
    }

    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

//--------------
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: "name and age are required" });
    }

    student.name = name;
    student.age = age;

    res.status(200).json(student);
});

//--------------------
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);
    res.status(200).json({ message: "Student deleted successfully" });
});



//--------------------
app.get("/courses", (req, res) => {
    res.status(200).json(courses);
});

//------------------
app.get("/courses/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);

    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
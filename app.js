const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, nama: "Fani", jurusan: "Informatika" },
  { id: 2, nama: "Risma", jurusan: "Sistem Informasi" },
  { id: 3, nama: "Hilwa", jurusan: "Teknik Komputer" },
];

app.get("/", (req, res) => {
  res.send("API Mahasiswa berjalan");
});

app.get("/students", (req, res) => {
  res.json(students);
});

// GET berdasarkan ID
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) {
    return res.status(404).send("Mahasiswa tidak ditemukan");
  }

  res.json(student);
});

// POST tambah mahasiswa
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    nama: req.body.nama,
    jurusan: req.body.jurusan,
  };

  students.push(newStudent);

  res.json({
    message: "Mahasiswa berhasil ditambahkan",
    data: newStudent,
  });
});

// PUT update mahasiswa
app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) {
    return res.status(404).send("Mahasiswa tidak ditemukan");
  }

  student.nama = req.body.nama;
  student.jurusan = req.body.jurusan;

  res.json({
    message: "Mahasiswa berhasil diupdate",
    data: student,
  });
});

// DELETE mahasiswa
app.delete("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);

  if (index === -1) {
    return res.status(404).send("Mahasiswa tidak ditemukan");
  }

  const deleted = students.splice(index, 1);

  res.json({
    message: "Mahasiswa berhasil dihapus",
    data: deleted,
  });
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
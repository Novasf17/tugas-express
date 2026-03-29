# tugas-express
# Tugas Basic REST API dengan Express.js

## Deskripsi

Project ini merupakan implementasi **REST API sederhana** menggunakan **Node.js** dan **Express.js** dengan menggunakan **data dummy (array)** tanpa database.

API ini dibuat untuk memahami konsep dasar:

* Server Node.js
* Routing pada Express
* HTTP Method (GET, POST, PUT, DELETE)
* Response JSON
* Parameter pada URL

---

## ⚙️ Teknologi yang Digunakan

* Node.js
* Express.js

---

## Struktur Project

```
tugas-express
│── app.js
│── package.json
│── node_modules
```
## Cara Menjalankan Project

1. Install dependencies:

```
npm install
```

2. Jalankan server:

```
node app.js
```

3. Buka browser:

```
http://localhost:3000
```
## Data Dummy

```javascript
let students = [
  { id: 1, nama: "Fani", jurusan: "Informatika" },
  { id: 2, nama: "Risma", jurusan: "Sistem Informasi" },
  { id: 3, nama: "Hilwa", jurusan: "Teknik Komputer" },
];
```
## Endpoint API

### 1. Home

**GET /**

```
http://localhost:3000/
```

Response:

```
API Mahasiswa berjalan
```
### 2. GET Semua Mahasiswa

**GET /students**

```
http://localhost:3000/students
```
### 3. GET Mahasiswa Berdasarkan ID

**GET /students/:id**

```
http://localhost:3000/students/1
```

Response jika tidak ditemukan:

```
Mahasiswa tidak ditemukan
```
### 4. POST Tambah Mahasiswa

**POST /students**

Body JSON:

```json
{
  "nama": "Dewi",
  "jurusan": "Informatika"
}
```
### 5. PUT Update Mahasiswa

**PUT /students/:id**

Contoh:

```
http://localhost:3000/students/1
```

Body JSON:

```json
{
  "nama": "Fani Update",
  "jurusan": "Informatika"
}
```
### 6. DELETE Mahasiswa

**DELETE /students/:id**

Contoh:

```
http://localhost:3000/students/2
```
##  Testing

Untuk testing endpoint POST, PUT, DELETE dapat menggunakan:

* Postman
## Kesimpulan

Project ini menunjukkan bagaimana membuat REST API sederhana menggunakan Express.js tanpa database dengan memanfaatkan data dummy berupa array.
## Author

* Nama: Neng Nova Siti Fathonah
* Kelas: 23KB TIF
* NIM :23552011455

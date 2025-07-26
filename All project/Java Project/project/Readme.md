# 📚 Java Library Management System (with Swing UI)

A beginner-friendly Java project that demonstrates a **Library Management System** using:
- **Java Swing** (for simple UI)
- **Object-Oriented Programming**
- **File Handling** (to save/load books persistently)

---

## ✅ Features

- 🔐 **Admin Login** (`admin` / `admin123`)
- ➕ Add new books
- 📤 Issue books
- 📥 Return books
- 📄 View all books with availability
- 💾 File-based persistence (`books.txt`)

---

## 🛠 Technologies & Libraries Used

| Technology | Purpose                  |
|------------|---------------------------|
| Java (JDK 8+) | Core programming logic |
| Java Swing   | UI components (buttons, fields, dialogs) |
| Java Serialization | Save/load book list to file |

No third-party libraries required — works with **core Java only**.

---

## 📁 Project Structure

project/
├── Book.java # Book class (Serializable)
├── Library.java # Manages book actions and file I/O
├── User.java # Login credentials handling
├── MainUI.java # Main class with Swing UI
├── books.txt # Auto-generated file for book storage

## Login Credentials

Username: admin

Password: admin123
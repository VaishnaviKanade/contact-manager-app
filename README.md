cd C:\Users\vaish\Downloads\contact-manager-app

echo # 📇 Contact Manager App (MERN Stack)

This is a Contact Management Application built using the **MERN stack** — MongoDB, Express, React, and Node.js. It supports full **CRUD operations** (Create, Read, Update, Delete) with proper validation and a responsive UI.

---

## 🚀 Features

- Add new contacts with name, email, phone, and address
- Edit and update contact details
- Delete contacts
- Data stored in MongoDB Atlas
- Basic validation (no duplicate emails or phones)

---

## 🧠 Tech Stack

| Layer         | Technology |
|---------------|------------|
| Frontend      | React.js   |
| Backend       | Node.js + Express |
| Database      | MongoDB Atlas |
| Styling       | CSS        |
| HTTP Client   | Axios      |

---

## 📦 Setup Instructions

### 🔧 Prerequisites:
- Node.js and npm installed
- MongoDB Atlas account
- Git installed

### 📁 1. Clone the Repository

\`\`\`bash
git clone https://github.com/VaishnaviKanade/contact-manager-app.git
cd contact-manager-app
\`\`\`

### ⚙️ 2. Backend Setup

\`\`\`bash
cd server
npm install
\`\`\`

Create a `.env` file in `/server`:

\`\`\`
PORT=5000
MONGO_URI=your_mongodb_connection_string
\`\`\`

Start the backend:

\`\`\`bash
node index.js
\`\`\`

### 🎨 3. Frontend Setup

\`\`\`bash
cd ../client
npm install
npm start
\`\`\`

---

## 🎥 Demo Video

> [*(Insert your Google Drive or Loom video link here after recording)*](https://drive.google.com/file/d/17qv_6rSblneJ1Z4xbvdpzvpbLOCtGeyK/view?usp=drivesdk)

---

## 🙋‍♀️ Author

**Sandhya (Vaishnavi Kanade)**  
[GitHub Profile]([https://github.com/VaishnaviKanade](https://github.com/VaishnaviKanade))

---

## 📄 License

This project is open-source and free to use.
" > README.md

git add README.md
git commit -m "Added project README"
git push

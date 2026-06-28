# MultiLingual Voice Banking

A voice-enabled banking application that enables users to perform banking operations using speech commands in multiple languages. The project improves accessibility by combining speech recognition, multilingual support, and secure banking workflows.

---

## Features

- 🎤 Multilingual voice command support
- 🗣️ Speech-to-text based interaction
- 🌐 Support for multiple languages
- 🔐 JWT-based user authentication
- 💰 Check account balance
- 📄 View transaction history
- 💸 Transfer money
- 🔊 Text-to-Speech responses
- 📱 Responsive and user-friendly interface

---

## Tech Stack

**Frontend**
- React.js
- HTML5
- CSS3
- JavaScript

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication**
- JWT (JSON Web Token)

**APIs & Libraries**
- Speech Recognition API
- Text-to-Speech API

---

## Project Modules

### Authentication
- User Registration
- User Login
- Secure JWT Authentication

### Voice Assistant
- Captures user voice input
- Converts speech into text
- Detects banking commands
- Executes requested banking operations

### Multilingual Support
- Supports multiple languages
- Enables users to interact in their preferred language
- Generates responses in the selected language

### Banking Services
- Check Account Balance
- View Transaction History
- Transfer Money
- Manage User Profile

---

## How It Works

1. User logs into the application.
2. User speaks a banking command.
3. Speech Recognition converts voice into text.
4. The system identifies the user's intent.
5. Backend processes the banking request.
6. The result is displayed on the screen.
7. Text-to-Speech provides an audio response.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/MultiLingual-VoiceBanking.git
cd MultiLingual-VoiceBanking
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Folder Structure

```text
MultiLingual-VoiceBanking/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── App.js
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── .env
├── README.md
└── package.json
```

---

## Future Enhancements

- Support additional Indian and international languages
- AI-powered intent recognition
- Voice biometric authentication
- UPI integration
- Bill payments and recharge services
- Transaction notifications
- Admin dashboard
- Real-time fraud detection

---

## Author

**Ayushi Tripathi**

---

## License

This project is intended for learning and educational purposes.

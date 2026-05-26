# MERN Student Management System

A full-stack web application built with MERN (MongoDB, Express, React, Node.js) for managing student records.

## Features

- ✅ **Add Student** - Create new student records with detailed information
- ✅ **View All Students** - Display all students in an interactive table
- ✅ **Search Students** - Search by name, email, or roll number
- ✅ **Edit Student** - Update student information
- ✅ **Delete Student** - Remove student records with confirmation

## Tech Stack

### Frontend
- React 18.2.0
- Axios (HTTP client)
- CSS3 for responsive design

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- CORS enabled

## Project Structure

```
mern/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm.js
│   │   │   ├── StudentList.js
│   │   │   └── SearchBar.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server/                 # Express backend
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── package.json            # Root package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas connection string)

### Installation

1. **Clone the repository** (or extract the project files)

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install all dependencies**
   ```bash
   npm run install-all
   ```

### Configuration

1. **Backend Configuration**
   - Open `server/.env` and update MongoDB connection:
   ```
   MONGODB_URI=mongodb://localhost:27017/student-management
   PORT=5000
   NODE_ENV=development
   ```

   For MongoDB Atlas:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/student-management
   ```

### Running the Application

**Option 1: Run both frontend and backend together**
```bash
npm start
```

**Option 2: Run separately**

Terminal 1 - Start backend:
```bash
npm run server
```

Terminal 2 - Start frontend:
```bash
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Students
- `GET /api/students` - Get all students (supports search query parameter)
- `GET /api/students/:id` - Get a single student
- `POST /api/students` - Create a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student
- `GET /api/health` - Health check endpoint

### Student Data Model

```javascript
{
  name: String (required),
  email: String (required, unique, validated),
  rollNumber: String (required, unique),
  phoneNumber: String (required),
  dateOfBirth: Date (required),
  address: String (required),
  city: String (required),
  state: String (required),
  zipCode: String (required),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## Features in Detail

### Add Student
- Click "Add New Student" button
- Fill in all required fields
- Submit form to create a new student record

### View All Students
- Students are displayed in a responsive table
- Shows name, roll number, email, phone, and city
- Click Edit or Delete buttons for actions

### Search Students
- Use the search bar to find students
- Search by student name, email, or roll number
- Results update in real-time

### Edit Student
- Click the Edit button on any student row
- Update the student information
- Click "Update Student" to save changes

### Delete Student
- Click the Delete button on any student row
- Confirm deletion in the popup
- Student record will be removed from the database

## Building for Production

To build the React frontend for production:

```bash
npm run build
```

This creates an optimized build in the `client/build` directory.

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or check your connection string
- For MongoDB Atlas, verify your IP whitelist includes your current IP

### Port Already in Use
- Backend uses port 5000: Kill the process using this port
- Frontend uses port 3000: Kill the process using this port

### CORS Error
- Ensure the backend is running and CORS is enabled
- Check that the proxy in `client/package.json` points to `http://localhost:5000`

### Dependencies Issues
- Delete `node_modules` folders and `package-lock.json` files
- Run `npm run install-all` again

## Future Enhancements

- User authentication and authorization
- Student grade tracking
- Attendance management
- File upload for student photos
- Export student data to CSV/PDF
- Email notifications

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.

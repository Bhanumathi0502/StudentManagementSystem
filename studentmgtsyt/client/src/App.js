import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch all students
  const fetchStudents = async (searchQuery = '') => {
    setLoading(true);
    try {
      const response = await axios.get('/api/students', {
        params: { search: searchQuery },
      });
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      alert('Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle search
  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
    fetchStudents(searchQuery);
  };

  // Handle add student
  const handleAddStudent = (studentData) => {
    setEditingStudent(null);
    setShowForm(false);
    fetchStudents(search);
  };

  // Handle edit student
  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  // Handle delete student
  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`/api/students/${id}`);
        fetchStudents(search);
        alert('Student deleted successfully');
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Failed to delete student');
      }
    }
  };

  // Handle form close
  const handleFormClose = () => {
    setShowForm(false);
    setEditingStudent(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Student Management System</h1>
      </header>

      <main className="app-main">
        <div className="controls">
          <SearchBar onSearch={handleSearch} />
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            + Add New Student
          </button>
        </div>

        {showForm && (
          <StudentForm
            student={editingStudent}
            onSuccess={handleAddStudent}
            onClose={handleFormClose}
          />
        )}

        {loading ? (
          <div className="loading">Loading students...</div>
        ) : (
          <StudentList
            students={students}
            onEdit={handleEditStudent}
            onDelete={handleDeleteStudent}
          />
        )}
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './StudentList.css';

function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="no-students">
        <p>No students found. Click "Add New Student" to get started.</p>
      </div>
    );
  }

  return (
    <div className="student-list">
      <div className="table-responsive">
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="name-cell">{student.name}</td>
                <td>{student.rollNumber}</td>
                <td className="email-cell">{student.email}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.city}</td>
                <td className="actions-cell">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => onEdit(student)}
                    title="Edit student"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-small"
                    onClick={() => onDelete(student._id)}
                    title="Delete student"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load data from localStorage when component mounts
    const data = JSON.parse(localStorage.getItem('employees_data'));
    if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  const handleEdit = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };
// Function to delete an employee
async function deleteEmployee(id) {
  const apiUrl = 'https://2jyozctm10.execute-api.us-east-1.amazonaws.com/items';

  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to delete employee:', error);
  }
}

  const handleDelete = async (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteEmployee(id);
          const updatedEmployees = employees.filter((employee) => employee.id !== id);
          setEmployees(updatedEmployees);
          localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Employee data has been deleted.',
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          console.error('Failed to delete employee:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to delete employee.',
            showConfirmButton: true,
          });
        }
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} setIsAuthenticated={setIsAuthenticated} />
          <Table employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
        </>
      )}
      {isAdding && (
        <Add employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding} />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;

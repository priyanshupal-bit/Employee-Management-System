import React, { useState, useEffect } from 'react';

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'Priyanshu', lastName: 'Pal', email: 'priyanshu@example.com', salary: 65000 },
    { id: 2, firstName: 'Amit', lastName: 'Kumar', email: 'amit@example.com', salary: 55000 }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(emp =>
    `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2>Employee Management System</h2>
      
      <input
        type="text"
        placeholder="Search employees by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      <table border="1" cellPadding="12" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary ($)</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

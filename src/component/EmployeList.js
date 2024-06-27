import React from "react";

const EmployeList = () => {
  const employees = [
    { id: 1, name: "John Doe", position: "Software Engineer" },
  ];
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}{" "}
            <link to={`/employee/${employee.id}`}>View</link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeList;

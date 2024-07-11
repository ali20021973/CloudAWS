const apiUrl = '';


// Function to delete an employee
async function deleteEmployee(id) {
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


// Function to create a new employee
export async function createEmployee(employee) {
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT', // Use PUT instead of POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to create or update employee:', error);
    throw error;
  }
}

// Function to update an employee
export async function updateEmployee(id, employee) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to update employee:', error);
  }
}





const employeesData = [
  {
    id: 1,
    firstName: 'Susan',
    lastName: 'Jordon',
    email: 'susan@example.com',
    salary: '95000',
    date: '2019-04-11',
  },
  {
    id: 2,
    firstName: 'Adrienne',
    lastName: 'Doak',
    email: 'adrienne@example.com',
    salary: '80000',
    date: '2019-04-17',
  },
  {
    id: 3,
    firstName: 'Rolf',
    lastName: 'Hegdal',
    email: 'rolf@example.com',
    salary: '79000',
    date: '2019-05-01',
  },
  {
    id: 4,
    firstName: 'Kent',
    lastName: 'Rosner',
    email: 'kent@example.com',
    salary: '56000',
    date: '2019-05-03',
  },
  {
    id: 5,
    firstName: 'Arsenio',
    lastName: 'Grant',
    email: 'arsenio@example.com',
    salary: '65000',
    date: '2019-06-13',
  },
  {
    id: 6,
    firstName: 'Laurena',
    lastName: 'Lurie',
    email: 'laurena@example.com',
    salary: '120000',
    date: '2019-07-30',
  },
  {
    id: 7,
    firstName: 'George',
    lastName: 'Tallman',
    email: 'george@example.com',
    salary: '90000',
    date: '2019-08-15',
  },
  {
    id: 8,
    firstName: 'Jesica',
    lastName: 'Watlington',
    email: 'jesica@example.com',
    salary: '60000',
    date: '2019-10-10',
  },
  {
    id: 9,
    firstName: 'Matthew',
    lastName: 'Warren',
    email: 'matthew@example.com',
    salary: '71000',
    date: '2019-10-15',
  },
  {
    id: 10,
    firstName: 'Lyndsey',
    lastName: 'Follette',
    email: 'lyndsey@example.com',
    salary: '110000',
    date: '2020-01-15',
  },
];

export { employeesData };

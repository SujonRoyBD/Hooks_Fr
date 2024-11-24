import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [data, setData] = useState(null); // Initialize state

  // Fetch data using useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json()) // Parse JSON response
      .then((data) => setData(data)) // Update state with data
    //   .catch((error) => console.error('Error fetching data:', error)); // Handle errors
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      {data ? ( // Check if data is loaded
        data.map((user) => ( // Map over the data array
          <div key={user.id}>
            <h1>{user.name}</h1> {/* Display user name */}
          </div>
        ))
      ) : (
        <p>Loading...</p> // Show loading message
      )}
    </div>
  );
};

export default UseEffect;

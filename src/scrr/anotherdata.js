import React, { useState, useEffect } from 'react';
import { fetchData } from '../scrr/Dataco'; // Import the fetchData function from the api.js file

const DataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const apiData = await fetchData(); // Call the fetchData function
        setData(apiData);
      } catch (error) {
        // Handle error if necessary
      }
    };

    getData();
  }, []);

  // Rest of the component code
};

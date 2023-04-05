import axios from 'axios';
import React, { useEffect } from 'react';

const DisplayDetails = () => {
  useEffect(() => {
    const id = localStorage.getItem('id');
    console.log(id);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}getBookingDetails`,
        { id: id },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <div>DisplayDetails</div>;
};

export default DisplayDetails;

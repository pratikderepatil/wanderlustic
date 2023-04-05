import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DisplayDetails from '../Components/DisplayDetails';
import Registration from '../Components/Registration';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/booking-details" element={<DisplayDetails />} />
    </Routes>
  );
};

export default AllRoutes;

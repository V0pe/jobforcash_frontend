import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const WithSidebar = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

export default WithSidebar;

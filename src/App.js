import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import useAuth from './hooks/useAuth';
import Signup from './components/Signup';
import Login from './components/Login';
import Laborers from './components/Laborers';
import Laborer from './components/Laborer';
import CreateLaborer from './components/CreateLaborer';
import DeleteLaborers from './components/DeleteLaborers';
import Reservations from './components/Reservations';
import CreateReservation from './components/CreateReservation';
import WithSidebar from './components/WithSidebar';
import WithoutSidebar from './components/withoutSidebar';

function App() {
  const { authChecked, loggedIn } = useAuth();

  return (
    <Router>
      <Routes>
        <Route element={<WithoutSidebar />}>
          <Route path="/login" element={<Login loggedIn={loggedIn} />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<WithSidebar />}>
          <Route element={<ProtectedRoutes isAllowed={loggedIn} authChecked={authChecked} redirectPath="/login" />}>
            <Route path="/createlaborer" element={<CreateLaborer />} />
            <Route path="/" element={<Laborers />} />
            <Route path="/laborers/:id" element={<Laborer />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/create-reservation/:id" element={<CreateReservation />} />
            <Route path="/delete-laborers" element={<DeleteLaborers />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

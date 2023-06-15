import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import useAuth from './hooks/useAuth';
import Signup from './components/Signup';
import Login from './components/Login';
import LogoutProvisional from './components/LogoutProvisional';
import Laborers from './components/Laborers';
import Laborer from './components/Laborer';
import CreateLaborer from './components/CreateLaborer';

function App() {
  const { authChecked, loggedIn } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login loggedIn={loggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoutes isAllowed={loggedIn} authChecked={authChecked} redirectPath="/login" />}>
          <Route path="/createlaborer" element={<CreateLaborer />} />
          <Route path="/laborers" element={<Laborers />} />
          <Route path="/laborers/:id" element={<Laborer />} />
          <Route path="/" element={<LogoutProvisional />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

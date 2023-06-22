import React from 'react';
import './App.css';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import useAuth from './hooks/useAuth';

const Signup = React.lazy(() => import('./components/Signup'));
const Login = React.lazy(() => import('./components/Login'));
const Laborers = React.lazy(() => import('./components/Laborers'));
const Laborer = React.lazy(() => import('./components/Laborer'));
const CreateLaborer = React.lazy(() => import('./components/CreateLaborer'));
const DeleteLaborers = React.lazy(() => import('./components/DeleteLaborers'));
const CreateReservation = React.lazy(() => import('./components/CreateReservation'));
const Reservations = React.lazy(() => import('./components/Reservations'));
const WithSidebar = React.lazy(() => import('./components/WithSidebar'));
const WithoutSidebar = React.lazy(() => import('./components/WithoutSidebar'));
const App = () => {
  const { authChecked, loggedIn } = useAuth();

  return (
    <React.Suspense
      fallback={(
        <Spinner
          animation="grow"
          variant="success"
          style={{
            width: '4rem',
            height: '4rem',
            position: 'absolute',
            top: '0',
            bottom: '0',
            right: '0',
            left: '0',
            margin: 'auto auto',
          }}
        />
        )}
    >
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
    </React.Suspense>
  );
};

export default App;

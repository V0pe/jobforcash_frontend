/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginUser } from '../redux/actions/auth';
import './components.css';

const Login = ({ loggedIn }) => {
  if (loggedIn) return <Navigate to="/" replace />;

  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (data) => dispatch(loginUser(data)).catch(() => setError('Invalid credentials. Try again'));

  return (
    <main className="background d-flex flex-row justify-content-center align-items-center">
      <div className="">
        <div className="">
          <h3 className="text-white text-center">LOGIN INTO YOUR ACCOUNT</h3>
          <hr className="tiny-line" />
        </div>
        {error && <p className="">{error}</p>}
        {errors.username && <p className="">Username is required</p>}
        {errors.email && <p className="">Email is required</p>}
        {errors.password && <p className="">Password is required</p>}
        <form className="" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-3">
            <input
              className="form-control"
              type="username"
              placeholder="Username"
              {...register('username', { required: 'Username is required' })}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              placeholder="e-mail address"
              {...register('email', { required: 'email is required' })}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input className="btn custom-lime rounded my-3 mx-3" type="submit" value="Log In" />
            <Link className="btn btn-success rounded my-3 mx-3" to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Login;

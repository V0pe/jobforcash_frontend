/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../redux/actions/auth';
import './components.css';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (data) => {
    dispatch(signupUser(data)).catch(() => setError('Invalid credentials. Try again'));
    navigate('/');
  };

  return (
    <main className="background d-flex flex-row justify-content-center align-items-center">
      <div className="">
        <div className="">
          <h2 className="text-white text-center">SIGN UP FOR AN ACCOUNT</h2>
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
              type="text"
              placeholder="Username"
              {...register('username', { required: 'Username is required' })}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
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
            <input className="btn custom-lime rounded my-3 mx-3" type="submit" value="Sign Up" />
            <Link className="btn btn-success rounded my-3 mx-3" to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;

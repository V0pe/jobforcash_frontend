/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const { reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const { currentUser } = useSelector((state) => state.auth);
  if (currentUser.role !== 'admin') {
    navigate('/');
  }

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', user.username);
    dispatch(addUser(data));
    navigate('/');
    reset();
  };

  return (
    <main className="container">
      <div className="my-3 d-flex flex-column align-items-center">
        <h2>Add a Username to Listing</h2>
        <form className="my-3 d-flex flex-row justify-content-center border border-dark" onSubmit={handleSubmit}>
          <div className="my-3 mx-5">
            <div className="d-flex flex-row justify-content-between my-3">
              <label
                className=""
                htmlFor="user-username"
              >
                Username:
              </label>
              <input
                className=""
                id="user-username"
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-3">
              <button className="btn btn-primary btn-lg" type="submit" >
                Add Username
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default User;
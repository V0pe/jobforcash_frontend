/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getToken } from '../redux/actions/auth';

const CreateLaborer = () => {
  const { reset } = useForm();
  const navigate = useNavigate();
  const [laborer, setLaborer] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setLaborer({ ...laborer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    const img = document.getElementById('image_url');

    data.append('image', img.files[0]);
    // data.append('journeyman_id', parseInt(id, 10));
    data.append('name', laborer.name);
    data.append('skill', laborer.skill);
    data.append('description', laborer.description);
    data.append('country', laborer.country);
    data.append('city', laborer.city);
    data.append('price', laborer.price);

    axios.post('http://localhost:3001/v1/laborers', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getToken(),
      },
    })
      .then(() => {
        navigate('/');
      });
    reset();
  };

  return (
    <main className="">
      <div className="my-5 d-flex flex-column align-items-center">
        <h2>Add a Laborer to Listing</h2>
        <form className="my-5 d-flex flex-row justify-content-center border border-dark" onSubmit={handleSubmit}>
          <div className="my-5 mx-5">
            <div className="d-flex flex-row justify-content-between my-3">
              <label
                className=""
                htmlFor="Laborer-name"
              >
                Laborer Name:
              </label>
              <input
                className=""
                id="laborer-name"
                type="text"
                name="name"
                placeholder="Journeyman name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex flex-row justify-content-between my-3">
              <label
                className=""
                htmlFor="Laborer-skill"
              >
                Skill:
              </label>
              <input
                className=""
                id="laborer-skill"
                type="text"
                name="skill"
                placeholder="Journeyman skill"
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex flex-row justify-content-between my-3">
              <label
                className=""
                htmlFor="Laborer-description"
              >
                Description:
              </label>
              <input
                className=""
                id="laborer-description"
                type="text"
                name="description"
                placeholder="Description of skill value"
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex flex-row justify-content-between my-3">
              <label
                className=""
                htmlFor="Laborer-country"
              >
                Country:
              </label>
              <input
                className=""
                id="laborer-country"
                type="text"
                name="country"
                placeholder="Country where labor is required"
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex flex-row justify-content-between my-3">
              <label
                className=""
                htmlFor="Laborer-city"
              >
                City:
              </label>
              <input
                className=""
                id="laborer-city"
                type="text"
                name="city"
                placeholder="City where labor is required"
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex flex-row justify-content-between my-3">
              <label
                className=""
                htmlFor="Laborer-price"
              >
                Price:
              </label>
              <input
                className=""
                id="Laborer-price"
                type="number"
                name="price"
                placeholder="Enter price per day"
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex flex-column justify-content-between">
              <label
                className="my-3"
                htmlFor="Laborer-image"
              >
                Image:
              </label>
              <input
                className="btn btn-dark"
                id="image_url"
                type="file"
                name="image_url"
                placeholder="Select Image"
                required
              />
            </div>
            <div className="my-3">
              <button className="btn custome-lime btn-lg" type="submit">
                Add Laborer
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateLaborer;

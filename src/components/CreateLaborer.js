import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLaborer } from '../redux/actions/laborers';

const CreateLaborer = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = async (data) => {
    dispatch(addLaborer(data));
    navigate('/');
  };

  return (
    <main className="">
      <div className="my-5 d-flex flex-column align-items-center">
        <h2>Add a Laborer to Listing</h2>
        <form className="my-5 d-flex flex-row justify-content-center border border-dark" onSubmit={handleSubmit(onFormSubmit)}>
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
                id="Laborer-name"
                type="text"
                {...register('name', { required: 'Laborer name is required' })}
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
                id="Laborer-skill"
                type="text"
                {...register('skill', { required: 'Skill is required' })}
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
                id="Laborer-descrption"
                type="text"
                {...register('descrpition', { required: 'Description is required' })}
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
                id="Laborer-country"
                type="text"
                {...register('country', { required: 'Country is required' })}
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
                id="Laborer-city"
                type="text"
                {...register('city', { required: 'City is required' })}
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
                type="text"
                {...register('price', { required: 'Price is required' })}
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
                id="Laborer-image"
                type="file"
                {...register('image', { required: 'Image is required' })}
              />
            </div>
            <div className="my-3">
              <button className="btn btn-primary btn-lg" type="submit" >
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
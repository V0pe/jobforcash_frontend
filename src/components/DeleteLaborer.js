import React from 'react';
import PropTypes from 'prop-types';
import './laborer.css';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../redux/actions/auth';

const DeleteLaborer = ({
  id, name, skill, price, imageUrl, city, description,
}) => {
  const navigate = useNavigate();

  async function deleteLaborer() {
    const response = await fetch(`http://localhost:3001/v1/laborers/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    });
    if (response.ok) {
      navigate('/');
    }
  }

  return (
    <div className="d-flex justify-content-around my-4">
      <div className="mx-2 mt-3">
        <img className="image-fluid image-laborer-del rounded" src={imageUrl} alt="laborer-img" width="200" height="200" style={{ height: '50' }} />
      </div>
      <div className="d-flex flex-column align-items-start">
        <h4 className="mt-2">
          <b>Name:</b>
          {' '}
          {name}
        </h4>
        <p>
          <b>Skill:</b>
          {' '}
          {skill}
        </p>
        <p className="lab-del">
          <b>Description:</b>
          {' '}
          {description}
        </p>
        <p className="lab-del">
          <b>City:</b>
          {' '}
          {city}
        </p>
        <p>
          <b>Price:</b>
          {' '}
          {price}
        </p>
      </div>
      <div>
        <button className="btn custom-lime my-3 mx-3" type="button" onClick={deleteLaborer}>
          Delete
        </button>
      </div>
    </div>
  );
};

DeleteLaborer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default DeleteLaborer;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../redux/actions/auth';

function Reservation({
  id, laborerId, startDate, daysNumber, cost,
}) {
  const navigate = useNavigate();

  const [laborerImage, setLaborerImage] = useState('');
  const [laborerName, setLaborerName] = useState('');
  const [laborerSkill, setLaborerSkill] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3001/v1/laborers/${laborerId}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: getToken(),
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setLaborerImage(data.image_url);
        setLaborerName(data.name);
        setLaborerSkill(data.skill);
      }
    })();
  }, []);

  const deleteReservation = async () => {
    const response = await fetch(`http://localhost:3001/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    });
    navigate(0);
    if (response.ok) {
      console.log('Reservation deleted');
    } else {
      console.log(response);
    }
  };

  return (
    <div>
      <img className="" src={laborerImage} width="150" height="150" alt="laborer-img" />
      <p>{id}</p>
      <p>{laborerName}</p>
      <p>{laborerSkill}</p>
      <p>{startDate}</p>
      <p>{daysNumber}</p>
      <p>{cost}</p>
      <div>
        <button onClick={deleteReservation} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
  laborerId: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  daysNumber: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
};

export default Reservation;

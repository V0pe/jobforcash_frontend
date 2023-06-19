import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../redux/actions/auth';
import './components.css';

function Reservation({
  id, laborerId, startDate, daysNumber, cost,
}) {
  const navigate = useNavigate();

  const [laborerImage, setLaborerImage] = useState('');
  const [laborerName, setLaborerName] = useState('');
  const [laborerSkill, setLaborerSkill] = useState('');

  function addDays(originalDate, days) {
    const cloneDate = new Date(originalDate.valueOf());
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
  }

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
        setLaborerImage(data.image_url);
        setLaborerName(data.name);
        setLaborerSkill(data.skill);
      }
    })();
  }, [laborerId]);

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
      navigate(0);
    }
  };

  return (
    <main className="outlet">
      <div className="border border-dark rounded mx-5 my-5">
        <div className="d-flex flex-column align-items-center border border-light my-3 mx-3">
          <img className="my-2 mx-5" src={laborerImage} width="150" height="150" alt="laborer-img" />
          <p className="mx-5"><strong>{laborerName}</strong></p>
          <p className="mx-5"><strong>{laborerSkill}</strong></p>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <p className="mx-3">
            <strong>From:</strong>
            {' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }).format(new Date(startDate))}
          </p>
          <p className="mx-3">
            <strong>To:</strong>
            {' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }).format(new Date(addDays(startDate, daysNumber)))}
          </p>
          <p className="mx-3">
            <strong>Total days:</strong>
            {' '}
            {daysNumber}
          </p>
          <p className="mx-3">
            <strong>Cost:</strong>
            {' '}
            $
            {cost}
          </p>
        </div>
        <div>
          <button className="btn btn-danger my-3 mx-3" type="button" onClick={deleteReservation}>
            Delete
          </button>
        </div>
      </div>
    </main>
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

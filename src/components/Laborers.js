import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayLaborers } from '../redux/actions/laborers';

const Laborers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayLaborers());
  }, [dispatch]);

  const laborers = useSelector((state) => state.laborers);

  return (
    <div className="">
      <h2>Laborers</h2>
      {laborers.map((laborer) => (
        <div key={laborer.id + 1}>
          <img className="" src={laborer.image_url} alt="laborer-img" style={{ height: '50' }} />
          <p>{laborer.name}</p>
          <p>{laborer.skill}</p>
          <p>{laborer.country}</p>
          <p>{laborer.city}</p>
          <p>{laborer.dimensions}</p>
          <p>{laborer.price}</p>
        </div>
      ))}
      ;
    </div>
  );
};

export default Laborers;

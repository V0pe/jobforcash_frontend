/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './laborer.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { displayLaborers } from '../redux/actions/laborers';

const Laborers = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(displayLaborers());
  }, [dispatch]);

  const laborers = useSelector((state) => state.laborers);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? laborers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === laborers.length - 1 ? 0 : prevIndex + 1));
  };

  const iconStyle = {
    color: '#fff',
  };

  return (
    <div className="outlet text-center" style={{ marginTop: '4rem' }}>
      <h3>LATEST LABORERS</h3>
      <p>Please pick a laborer to use</p>
      <div className="d-flex justify-space-between align-items-center" style={{ marginTop: '2rem' }}>
        <div className="mx-4 side-btn">
          <button
            onClick={handlePrev}
            style={{
              background: 'ash', border: 'none', padding: '1rem', borderRadius: '1rem',
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <Carousel showArrows={false} showThumbs={false} selectedItem={currentIndex}>
          {laborers.map((laborer) => (
            <Link key={laborer.id} id={laborer.id} to={`/laborers/${laborer.id}`}>
              <div key={laborer.id + 1} className="d-flex flex-column align-items-start">
                <img className="image-fluid rounded-4" src={laborer.image_url} alt="laborer-img" width="100" height="300" style={{ height: '50' }} />
                <p className="mt-4">
                  <b>Name:</b>
                  {' '}
                  {laborer.name}
                </p>
                <p>
                  <b>Skill:</b>
                  {' '}
                  {laborer.skill}
                </p>
                <p>
                  <b>Price:</b>
                  {' '}
                  {laborer.price}
                </p>
              </div>
            </Link>
          ))}
          ;
        </Carousel>
        <div className="mx-4 side-btn">
          <button
            onClick={handleNext}
            style={{
              background: 'rgb(151, 191, 15)', border: 'none', padding: '1rem', borderRadius: '1rem',
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} style={iconStyle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Laborers;

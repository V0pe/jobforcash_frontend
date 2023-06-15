import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { displayLaborers } from '../redux/actions/laborers';

const Laborer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayLaborers());
  },
  [dispatch]);

  const laborers = useSelector((state) => state.laborers);
  const { id } = useParams();

  const filteredLaborers = laborers.filter((laborer) => laborer.id == id);


  return (
    <div className="">
      <div className="d-flex flex-column align-items-center">
        <div>
          <h2 className="mt-5 mx-5">Laborer</h2>
        </div>
        {filteredLaborers.map((item) => (
          <div className="card my-5 mx-3" key={item.id + 1}>
            <div className="my-5 mx-5">
              <img className="" src={item.image_url} width="200" height="200" alt="laborer-img" />
            </div>
            <div className="my-3 mx-5">
              <p className="text-secondary">
                Name:
                {' '}
                {item.name}
              </p>
              <p className="text-secondary">
                Skill:
                {' '}
                {item.skill}
              </p>
              <p className="text-secondary">
                Country:
                {' '}
                {item.country}
              </p>
              <p className="text-secondary">
                City:
                {' '}
                {item.city}
              </p>
              <p className="text-secondary">
                Price:
                {' '}
                $
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Laborer;
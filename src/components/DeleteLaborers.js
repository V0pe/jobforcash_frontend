import React, { useEffect } from 'react';
import './laborer.css';
import { useSelector, useDispatch } from 'react-redux';
import { displayLaborers } from '../redux/actions/laborers';
import DeleteLaborer from './DeleteLaborer';

const DeleteLaborers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayLaborers());
  }, [dispatch]);

  const laborers = useSelector((state) => state.laborers);

  return (
    <main className="outlet">
      <div className="mt-5 text-center">
        <h4>Pick Laborers to delete</h4>
        {laborers.map((laborer, id) => (
          <DeleteLaborer
            // eslint-disable-next-line react/no-array-index-key
            key={id}
            id={laborer.id}
            name={laborer.name}
            skill={laborer.skill}
            price={laborer.price}
            imageUrl={laborer.image_url}
            city={laborer.city}
            description={laborer.description}
          />
        ))}
        ;
      </div>
    </main>
  );
};

export default DeleteLaborers;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayReservations } from '../redux/actions/reservations';
import Reservation from './Reservation';

const Reservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayReservations());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations);

  return (
    <main className="">
      <div className="">
        {reservations.map((reservation, id) => (
          <Reservation
            // eslint-disable-next-line react/no-array-index-key
            key={id}
            id={reservation.id}
            laborerId={reservation.laborer_id}
            startDate={reservation.start_date}
            daysNumber={reservation.number_days}
            cost={reservation.cost}
          />
        ))}
        ;
      </div>
    </main>
  );
};

export default Reservations;

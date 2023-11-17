import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useHotels } from '../context/HotelsProvider';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

function SingleHotel() {
  const { id } = useParams();
  const { getHotel, isLoadingCurrentHotel, currentHotel } = useHotels();
  // const { data } = useFetch(`http://localhost:5000/hotels/${id}`);
  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurrentHotel || !currentHotel) return <Loader />;
  // console.log(currentHotel.xl_picture_url);
  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
          {currentHotel.number_of_reviews} reviews &bull;{''}
          {currentHotel.smart_location}
        </div>
        <img src={currentHotel.xl_picture_url} alt={currentHotel.name} />
      </div>
    </div>
  );
}
export default SingleHotel;

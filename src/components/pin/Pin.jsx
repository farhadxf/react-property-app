import { Marker, Popup } from 'react-leaflet';
import './Pin.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className='popup-container'>
          <img src={item.img} alt='' />
          <div className='text-container'>
            <Link to={`/items/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

Pin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    bedroom: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pin;

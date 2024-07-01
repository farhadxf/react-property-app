import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import { TiTick } from 'react-icons/ti';
import PropTypes from 'prop-types';

function Card({ item, onSave }) {
  const [show, setShow] = useState(false);

  const tickTimer = () => {
    setShow(!show ? true : false);
  };

  const handleSaveClick = () => {
    onSave(item); // Call the onSave function passed from SavedItems
    tickTimer();
  };

  return (
    <div className='card'>
      <Link to={`/items/${item.id}`} className='image-container'>
        <img src={item.img} alt='' />
      </Link>
      <div className='text-container'>
        <h2 className='title'>{item.title}</h2>
        <p className='address'>
          <img src='/pin.png' alt='' />
          <span>{item.address}</span>
        </p>
        <p className='price'>£{item.price}</p>
        <div className='bottom'>
          <div className='features'>
            <div className='feature'>
              <img src='/bed.png' alt='' />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className='feature'>
              <img src='/bath.png' alt='' />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className='icons'>
            <div className='icon' onClick={handleSaveClick}>
              {!show ? <img src='/save.png' alt='' /> : <TiTick />}
            </div>
            <div className='icon'>
              <Link to={'/chat'}>
                <img src='/chat.png' alt='' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Card;

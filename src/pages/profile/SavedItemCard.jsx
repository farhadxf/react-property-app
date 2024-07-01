import { Link } from 'react-router-dom';
import './Profile.scss';
import PropTypes from 'prop-types';

function SavedItemCard({ item, onRemove }) {
  return (
    <div className='saved-item-card'>
      <div className='image-container'>
        <Link to={`/items/${item.id}`}>
          <img src={item.img} alt={item.title} />
        </Link>
      </div>
      <div className='text-container'>
        <h3 className='title'>{item.title}</h3>
        <p className='address'>{item.address}</p>
        <p className='price'>£{item.price}</p>
        <div className='features'>
          <span>{item.bedroom} bedroom</span>
          <span>{item.bathroom} bathroom</span>
        </div>
        <button className='remove-btn' onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

SavedItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default SavedItemCard;

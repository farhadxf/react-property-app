import './Items.scss'; // Assuming your SCSS file is named items.scss
import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import { listData } from '../../data/Data';
import { useParams } from 'react-router-dom';

const Items = () => {
  const { id } = useParams();

  const itemsData = listData.find(
    (item) => item.id === (id ? parseInt(id) : 0)
  );

  if (!itemsData) {
    return <div>Product not found</div>;
  }

  const itemsForMap = [itemsData];

  return (
    <div className='items'>
      <div className='details'>
        <div className='wrapper'>
          {itemsData.images && itemsData.images.length > 0 && (
            <Slider images={itemsData.images} />
          )}
          <div className='info'>
            <div className='top'>
              <div className='post'>
                <h1>{itemsData.title}</h1>
                <div className='address'>
                  <img src='/pin.png' alt='' />
                  <span>{itemsData.address}</span>
                </div>
                <div className='price'>£ {itemsData.price}</div>
              </div>
            </div>
            <div className='bottom'>{itemsData.description}</div>
          </div>
        </div>
      </div>
      <div className='features'>
        <div className='wrapper'>
          <p className='title'>General</p>
          <div className='list-vertical'>
            <div className='feature'>
              <img src='/utility.png' alt='' />
              <div className='feature-text'>
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt='' />
              <div className='feature-text'>
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt='' />
              <div className='feature-text'>
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className='title'>Sizes</p>
          <div className='sizes'>
            <div className='size'>
              <img src='/size.png' alt='' />
              <span>80 sqft</span>
            </div>
            <div className='size'>
              <img src='/bed.png' alt='' />
              <span>2 beds</span>
            </div>
            <div className='size'>
              <img src='/bath.png' alt='' />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className='list-horizontal'>
            <div className='feature'>
              <img src='/school.png' alt='' />
              <div className='feature-text'>
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt='' />
              <div className='feature-text'>
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt='' />
              <div className='feature-text'>
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className='title'>Location</p>
          <div className='map-container'>
            <Map items={itemsForMap} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;

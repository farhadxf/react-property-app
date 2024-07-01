import { listData } from '../../data/Data';
import './List.scss';

import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

const List = () => {
  const data = listData;

  const handleSaveItem = (item) => {
    // Retrieve saved items from localStorage or use an empty array of none found
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Check if the item is already in the saved items list
    const isItemSaved = savedItems.some(
      (savedItem) => savedItem.id === item.id
    );

    // If the item is not already saved, add it to the list and update localStorage
    if (!isItemSaved) {
      const updatedItems = [...savedItems, item];
      localStorage.setItem('savedItems', JSON.stringify(updatedItems));
    }
  };

  return (
    <div className='list-page'>
      <div className='list-container'>
        <div className='wrapper'>
          {data.map((item) => (
            <Card key={item.id} item={item} onSave={handleSaveItem} />
          ))}
        </div>
      </div>
      <div className='map-container'>
        <Map items={data} />
      </div>
    </div>
  );
};

export default List;

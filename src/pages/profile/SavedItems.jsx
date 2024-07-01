import { useState, useEffect } from 'react';
import SavedItemCard from './SavedItemCard';
import './Profile.scss';

const SavedItems = () => {
  const [savedItems, setSavedItems] = useState([]);

  // Load saved items from localStorage on component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedItems(storedItems);
  }, []);

  //remove a saved item and update localStorage
  const handleRemoveItem = (itemId) => {
    const updatedItems = savedItems.filter((item) => item.id !== itemId);
    setSavedItems(updatedItems);
    localStorage.setItem('savedItems', JSON.stringify(updatedItems));
  };

  return (
    <div className='saved-items-list'>
      <div className='items'>
        {savedItems.map((item) => (
          <SavedItemCard
            key={item.id}
            item={item}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedItems;

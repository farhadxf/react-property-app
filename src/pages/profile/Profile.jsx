import './Profile.scss';
import SavedItems from './SavedItems';

const Profile = () => {
  return (
    <div className='profile-page'>
      <div className='details'>
        <div className='wrapper'>
          <div className='title'>
            <p style={{ textDecoration: 'underline' }}>User Information</p>
          </div>
          <div className='info'>
            <span>
              Profile:
              <img
                src='https://images.pexels.com/photos/5467586/pexels-photo-5467586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpeg'
                alt=''
              />
            </span>
            <span>
              Username: <b>james-wilson</b>
            </span>
            <span>
              E-mail: <b>jameswill@mail.com</b>
            </span>
          </div>
        </div>
        <div className='saved'>
          <h2>Saved List</h2> <hr />
        </div>
        <SavedItems />
      </div>
    </div>
  );
};

export default Profile;

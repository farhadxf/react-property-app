import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import { HiOutlineBars2 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update body overflow when isMobile changes, preventing scrolling
  useEffect(() => {
    document.body.style.overflow = isMobile ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile]);

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='' alt='LOGO..' />
        </Link>
      </div>

      <div className='nav-menu-bar'>
        <nav>
          <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
            <li>
              <NavLink
                className='nav-link'
                to={'/Search'}
                onClick={() => setIsMobile(false)}
              >
                Find
              </NavLink>
            </li>
            <li className='chat-li'>
              <NavLink
                className='nav-link'
                to={'/chat'}
                onClick={() => setIsMobile(false)}
              >
                chat
                <span>4</span>
              </NavLink>
            </li>

            <li className='nav-right'>
              <Link
                className='nav-link'
                to={'/profile'}
                onClick={() => setIsMobile(false)}
              >
                <img
                  src='https://images.pexels.com/photos/5467586/pexels-photo-5467586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpeg'
                  alt=''
                />
                <span>James Wilson</span>
                <span className='profile-text'>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <IoMdClose /> : <HiOutlineBars2 />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

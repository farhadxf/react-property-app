import './Footer.scss';
import { FaXTwitter, FaInstagram, FaPinterest } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='contact'>
      <div className='contact-wrapper'>
        <span>Get in touch</span>

        <div className='contact-icons'>
          <FaXTwitter />
          <FaInstagram />
          <FaPinterest />
        </div>
      </div>
    </div>
  );
};

export default Footer;

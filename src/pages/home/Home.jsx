import SearchBar from '../../components/searchBar/SearchBar';
import './Home.scss';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <div className='home-page'>
        <div className='text-container'>
          <div className='wrapper'>
            <h1 className='property-title wrapper-text'>Property Search</h1>
            <p className='wrapper-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              explicabo suscipit cum eius, iure est nulla animi consequatur
              facilis id pariatur fugit quos laudantium temporibus dolor ea
              repellat provident impedit!
            </p>
            <SearchBar />
            <div className='boxes'>
              <div className='box'>
                <h1>8+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className='box'>
                <h1>30</h1>
                <h2>Award Gained</h2>
              </div>
              <div className='box'>
                <h1>5000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='img-container'>
          <img src='/bg-img.png' alt='' />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

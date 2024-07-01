import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile.jsx';
import Items from './pages/items/Items.jsx';
import Search from './pages/search/Search.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import LiveChat from './pages/liveChat/LiveChat.jsx';
import Credit from './components/credit/Credit.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
        <Route path='/chat' element={<LiveChat />} />
        <Route path='/items/:id' element={<Items />} />
      </Routes>
      <Credit />
    </BrowserRouter>
  );
};

export default App;

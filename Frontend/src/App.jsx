import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { NewLogin, Services, LandingPage, SignIn } from './pages/index.js'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path='/login' element={<NewLogin />} />
      <Route path='/services' element={<Services />} />
      <Route path='/sign-in' element={<SignIn />} />

      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default App;
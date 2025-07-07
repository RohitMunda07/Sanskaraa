import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './components/Layout/Layout.jsx';
import Login from './pages/Login.jsx';
import { NewLogin, Services } from './pages/index.js'


const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path='/login' element={<NewLogin />} />
      <Route path='/services' element={<Services />} />

      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default App;
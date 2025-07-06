import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './components/Layout/Layout.jsx';
import Login from './pages/Login.jsx';
import NewLogin from './pages/NewLogin.jsx';

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path='/login' element={<NewLogin />} />
      
        {/* Add more routes here as needed */}
    </Routes>
  );
};

export default App;
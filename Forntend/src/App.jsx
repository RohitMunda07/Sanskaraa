import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './components/Layout/Layout.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/home" element={<Home />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default App;
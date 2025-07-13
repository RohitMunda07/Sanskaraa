import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { NewLogin, LandingPage, SignIn, Services, Layout } from './pages/index.js'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<NewLogin />} />
        <Route path="services" element={<Services />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};


export default App;
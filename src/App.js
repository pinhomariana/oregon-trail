import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import MainMenu from './menu';
import Trail from './trail';
import AboutTrail from './topTen';
import TopTen from './topTen';
import ManagmentOpt from './managmentOpt';

function App() {
  return (
    <Routes>
      <Route path="/oregon-trail" element={<MainMenu />} />
      <Route path="/oregon-trail/trail" element={<Trail />} />
      <Route path="/oregon-trail/top-ten" element={<TopTen />} />
      <Route path="/oregon-trail/managment-opt" element={<ManagmentOpt />} />
    </Routes>
  );
}

export default App;

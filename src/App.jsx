import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import './App.css';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;

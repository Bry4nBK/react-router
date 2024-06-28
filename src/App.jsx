import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';

import Home from './views/Home';
import Contact from './views/Contacto';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

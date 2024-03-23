import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

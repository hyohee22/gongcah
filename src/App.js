import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bend from './pages/Bend';
import New from './pages/New';
import Menu from './pages/Menu';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/_main.scss';
import './styles/_media.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bend' element={<Bend />} />
          <Route path='/new' element={<New />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

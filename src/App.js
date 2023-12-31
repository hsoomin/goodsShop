import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ToggleNav from './components/ToggleNav';
import Footer from './components/Footer';
import Interior from './pages/Interior';
import Kitchen from './pages/Kitchen';
import Fabric from './pages/Fabric';
import Event from './pages/Event';
import UploadPage from './components/UploadPage';
import ProductPage from './components/ProductPage';
import Login from './components/Login';
import Join from './components/Join';
import HorizontalScrollBar from './components/HorizontalScrollBar';
import QuickButton from './components/QuickButton';



function App() {
  return (
    <div className="App">
      <HorizontalScrollBar />
      <ToggleNav/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/interior' element={<Interior/>}/>
        <Route path='/kitchen' element={<Kitchen/>}/>
        <Route path='/fabric' element={<Fabric/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Join' element={<Join/>}/>
        <Route path='/UploadPage' element={<UploadPage/>} />
        <Route path='/ProductPage/:id' element={<ProductPage/>} />
      </Routes>
      <Footer/>
      <QuickButton />
    </div>
  );
}

export default App;

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
// import Header from './components/Header';  -> togglenav 수정중
import Footer from './components/Footer';
import Interior from './pages/Interior';
import Kitchen from './pages/Kitchen';
import Fabric from './pages/Fabric';
import Event from './pages/Event';
import UploadPage from './components/UploadPage';
import ProductPage from './components/ProductPage';
import VerticalScrollBar from './components/VerticalScrollBar';
import ToggleNav from './components/ToggleNav';



//https://becce8ba-5f81-45f7-90e2-60cde1c4d586.mock.pstmn.io
function App() {
  return (
    <div className="App">
      <VerticalScrollBar />
      <ToggleNav/>
      {/* <Header/>  */}
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/interior' element={<Interior/>}/>
        <Route path='/kitchen' element={<Kitchen/>}/>
        <Route path='/fabric' element={<Fabric/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/UploadPage' element={<UploadPage/>} />
        <Route path='/ProductPage/:id' element={<ProductPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

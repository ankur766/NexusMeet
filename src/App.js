import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Room from './Components/Room';

function App() {
  return (
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/roomPage/:roomID' element={<Room/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login/Login';
import Register from './page/Register/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

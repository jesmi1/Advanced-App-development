import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Auth/Signup';
import Login from './Auth/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Authenticated from './components/Authenticated/Authenticated';
import { AuthProvider } from './contexts/auth-context';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Navigate to='login'/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='authenticated' element={<Authenticated />} />
      </Routes>
    </AuthProvider>
  );
}

/*
        <Route path='/' element={<Login />} />

        <Route path='users'>
          <Route path=':username' element={<UserDash />}/>
          <Route path='list' element={<UserList />}/>
        </Route>

*/

export default App;

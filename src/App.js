import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRouter from './appRouter/AppRouter';
// import NavbarComp from './components/Navbar';
// import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      {/* <NavbarComp/> */}
        <AppRouter/>

    </div>
  );
}

export default App;

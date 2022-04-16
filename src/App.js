import React from 'react'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './component/login/Login'
import Dashboard from './component/dashboard/Dashboard'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
       <Routes>
              <Route path='https://rupomehsan.github.io/E-library-react/' element={<Login/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/dashboard" element={<Dashboard/>} />
       </Routes>
      
    
    </>
  );
}

export default App;

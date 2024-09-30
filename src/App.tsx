import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './componets/Home';


const App: React.FC = () => {
  return (<div  className='container-fluid' style={{padding:"0px"}} >
    <Navbar/>
    <Router>
      <Routes>
       <Route path="/" element={< Home />} />
         {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;

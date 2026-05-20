import { useState } from 'react'
import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
 return(
   <div>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route/>
     </Routes>
    </BrowserRouter>
   </div>
 );
}

export default App

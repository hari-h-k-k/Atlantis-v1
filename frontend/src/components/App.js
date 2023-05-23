import React from 'react';
// import Counter from './Counter';
// import User from './User';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './home/home.js';

function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/venues" element={<div>Anthada nokkane??? Nee venues page kandittille...!!!</div>}/>
            <Route path="/events" element={<div>Events page</div>}/>
            <Route path="/accessories" element={<div>Accessories page</div>}/>
            <Route path="/profile" element={<div>Profile page</div>}/>
        </Routes>
        </BrowserRouter>
        </>       
    );
}

export default App;

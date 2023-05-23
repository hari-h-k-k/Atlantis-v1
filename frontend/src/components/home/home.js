import React from 'react';
import './style_home.css';
// import logo from '../../assets/images/turf1.jpg'; 
import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
import CountryIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const HomePage = () => {
    
    return (
      <div
        className="homepage"
      >
        <Navbar/>
        <Searchbox/>
      </div>
    );
  };
  
  const Searchbox=()=>{
    return(
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="country">
        <CountryIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Venues"
        inputProps={{ 'aria-label': 'search venues' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="location">
        <LocationOnIcon />
      </IconButton>
    </Paper>
    )
  }
  const Navbar = () => {
    const navigate=useNavigate();
    return (
      <nav className="navbar">
        <div className="navbar-logo">
        <span className="logo-text" onClick={() => navigate("/")}>Lockspot</span>
        </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/venues" className="navbar-link">Venues</a>
            </li>
            <li className="navbar-item">
              <a href="/events" className="navbar-link">Events</a>
            </li>
            <li className="navbar-item">
              <a href="/accessories" className="navbar-link">Accessories</a>
            </li>
          </ul>
        <div className="navbar-logo">
        <span className="logo-text" onClick={() => navigate("/profile")}>SignIn</span>
        </div>
      </nav>
    );
  };
  
export default HomePage;

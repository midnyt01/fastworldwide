// import {useState} from "react";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useContext } from "react";
import MainLogo from '../../assets/navi_logo.png'
import './topbar.styles.css'

const Topbar = () => {

  return (
    <div>
      <div className='container'>
        <div className="announcement-bar">
          <p>24×7 Helpline : Email : firstworldwidefze@gmail.com</p>
        </div>
        <div className="topbar-container">
          <img src={MainLogo} alt="FWW Logo" />
          <ul>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/about-us-company-profile'>About</Link>
            </li>
            <li>
              <Link to='/bill-of-lading'>Bill of Lading</Link>
            </li>
            <li>
              <Link to='/contact-us'>Enquiry</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;


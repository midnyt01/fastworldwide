import { Link } from 'react-router-dom';
import './admin-sidebar.css'
import MainLogo from '../assets/navi_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Sidebar = ({sidebarToggle}) => {
  return (
    <div>
      <div className='sidenav'>
        <div className='slideout'>
            <span onClick={sidebarToggle} className='sidenav-close f-size-1'>
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </span>
            <ul className='admin-sidenav-links decoration-none'>
                <li>
                <Link to='/' className='decoration-none primary-text'>Home
                </Link>
                </li>
                <li>
                <Link to='/bill-of-lading' className='decoration-none'>Bill of lading
                </Link>
                </li>
                <li>
                <Link to='/about-us-company-profile' className='decoration-none'>About us
                </Link>
                </li>
                <li>
                <Link to='/contact-us' className='decoration-none'>Contact us
                </Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
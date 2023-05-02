import { Link } from 'react-router-dom';

import './footer.styled.css'

const Footer = () => {

    return (
      <div className="container dark-footer">
        <div className='container-fluid m-auto'>
            <div className='footer d-flex jc-space-btw'>
                <div className='footer-col-1'>
                    <h3>GET IN TOUCH</h3>

                    <h3>Corporate Office:</h3>
                    <p>First Worldwide Logistics Limited,<br />
                    SAIF SUITE Q1-01-012, GOLD PARK,<br />
                    SAIF ZONE, SHARJAH, UAE<br />
                    firstworldwidefze@gmail.com<br />
                    +971503618103 / +97165639248</p>
                </div>
                
                <div className='footer-col-2'>
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/bill-of-lading'>Track Us</Link></li>
                        <li><Link to='/'>Enquiry</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                </div>

                <div className='footer-col-3'>
                    <h3>MEMBERSHIP</h3>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
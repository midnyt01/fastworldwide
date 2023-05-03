import { Link } from 'react-router-dom';
import Missionicon from '../../assets/icon.png'
import Missionbanner from '../../assets/img_07.jpg'
import HeaderImg from '../../assets/icon-big-two.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../intro/section.styled.css'

const Missionection = () => {

    return (
      <div className="container">
        <div className='default-section m-auto'>
            <div className='mission-wrapper'>
                <h2>
                    Our Business Mission
                    <img src={Missionicon} alt='icon' className='mission-icon'/>
                    is Client’s Satisfaction
                </h2>
                <div className='mission-banner-container mt-4'>
                    <div className='top-left'>
                        <h2>50</h2>
                        <p>Projects Done</p>
                    </div>
                    <div className='bottom-left'>
                        <h2>40</h2>
                        <p>Happy Clients</p>
                    </div>
                    <img src={Missionbanner} alt='mission banner' />
                    <div className='top-right'>
                        <h2>20</h2>
                        <p>Team Members</p>
                    </div>
                    <div className='bottom-right'>
                        <h2>8</h2>
                        <p>Years of<br />Experience</p>
                    </div>
                </div>
                <h4 className='mt-4'>Why Choose Us?</h4>
                <h2 className='header-with-img mb-5'>The Main Features
                    <img src={HeaderImg} alt='' />
                </h2>
                <ul className='mb-4 mission-list'>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />One stop solution for all your Logistics needs</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />A professional and experienced team</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />Quick and efficient service</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />Provide free consultancy</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />Quick response time</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />Your success is our success</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />We will ensure costs are minimized</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />Own fleet of trucks provides us greater control</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />We conduct business honestly and ethically</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />Provides numerous value added services</li>
                    <li><FontAwesomeIcon icon="fa-solid fa-circle-check" />Pre-clearance / Post-clearance / Post-delivery support</li>
                </ul>
                <hr />
                <h2 className='mt-4'>First worldwide International FZE   Provides Dedicated Service in Freight Forwarding</h2>
                <Link to='/' className='btn cta-btn-bg'>Request Quote</Link>
            </div>
        </div>
      </div>
    );
  };
  
  export default Missionection;
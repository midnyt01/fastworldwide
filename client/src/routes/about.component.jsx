import { Link } from 'react-router-dom';
import Topbar from '../components/topbar/topbar.component';
import HeroBanner from "../components/home-banner.component";
import Footer from "../components/footer/footer.component";
import HeaderImg from '../assets/icon-big-two.png';

import '../components/intro/section.styled.css'

const AboutPage = () => {

    return (
    <div>
    <Topbar/>
    <HeroBanner/>
      <div className="container-fluid m-auto">
        <h2 className='header-with-img mb-5 text-align-center'>COMPANY PROFILE
            <img src={HeaderImg} alt='' />
        </h2>

        <p>Navistar Logistics is a group company and India’s leading logistics service providers in the field of licensed Customs Brokerage / Customs House Agents, International Freight Forwarding and land transportation having own fleet of 20’ and 40’ trailers. Established in the year 2021, we have our own customs broker license in the name of Navistar Logistics Limited</p>


        <p>We are strategically located in Hong Kong with regional branch offices across the country and abroad to serve our clients. We provide array of services like air / sea import & export customs clearance, air / sea import & export freight forwarding, transportation, sourcing / imports from china, warehousing, liasioning with allied government departments, foreign trade consultancy etc.</p>

        <p>We have a team of professionals who manage your cargo from the point of pickup till the point of delivery in the most efficient and time bound manner. Our aim is to provide viable, cost effective technology enabled solutions to the most challenging logistics & supply chain management questions.</p>


        <p>We reciprocate through our work entirely with a progressive mindset, “YOU TRUST US, WE CARE”.</p>

        <h3>Our Mission</h3>
        Navistar Logistics mission remains to “Deliver Service Excellence” and become the world’s preferred Clearing, Forwarding, Transportation and Sourcing company by applying insight, quality and innovation.

        <h3>Our Vision</h3>
        <p></p>To establish Navistar Logistics as the most leading Worldwide Logistics & Supply Chain Management company as a trusted partner to all our clients.

        <h3>Core Values</h3>
        <p>Unclear Logistics has always been values driven. Our shared values guide our actions that help us make a difference. These values continue to direct the growth and business of our company. Our core values are:</p>
        <ul className='mb-4'>
            <li>Integrity & Honesty</li>
            <li>Excellence</li>
            <li>Transparency</li>
            <li>Social responsibility</li>
            <li>Respect</li>
            <li>Responsive</li>
            <li>Teamwork</li>
        </ul>
    <Footer />
      </div>
      </div>
    );
  };
  
  export default AboutPage;
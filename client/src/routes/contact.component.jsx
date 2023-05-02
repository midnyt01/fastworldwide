import { Link } from 'react-router-dom';
import Topbar from '../components/topbar/topbar.component';
import HeroBanner from "../components/home-banner.component";
import Footer from "../components/footer/footer.component";
import HeaderImg from '../assets/icon-big-two.png';

import '../components/intro/section.styled.css'

const Contactpage = () => {

    return (
        <div>
        <Topbar/>
        <HeroBanner/>
            <div className="container-fluid m-auto">
                <h2 className='header-with-img mb-5 text-align-center'>CONTACT US
                    <img src={HeaderImg} alt='' />
                </h2>
                <form className='w-50 m-auto contact-form'>
                    <p><input type='text' placeholder='Enter your name'/></p>
                    <p><input type='email' placeholder='Enter your email'/></p>
                    <p><input type='text' placeholder='Enter subject'/></p>
                    <button className='btn dark-bg light-text'>Get in touch</button>
                </form>
            </div>
        <Footer />
        </div>
    );
  };
  
  export default Contactpage;
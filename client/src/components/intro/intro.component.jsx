import HeaderImg from '../../assets/icon-big-two.png'
import './section.styled.css'

const IntroSection = () => {

  
    return (
      <div className="container">
        <div className='default-section m-auto'>
            <h2 className='header-with-img mb-5'>Welcome To First World Logistics Ltd
              <img src={HeaderImg} alt='' />
            </h2>
            <p>First worldwide International FZE is a group company and India’s leading logistics service provider in the field of Licensed Customs Brokerage/ Customs House Agents/ Customs Clearance, International Freight Forwarding and Land Transportation (having own fleet of 20’ and 40’ Trailers).</p>

            <div className='d-flex jc-space-btw intro-sub-section'>
              <div className='w-75 pl-4 pr-5'>
                <h3>ABOUT US</h3>
                <p>Established in the year 2021, we have our own Customs Broker License in the name of First worldwide International FZE Limited We are strategically located in Hong Kong with regional branch offices across the country and abroad to serve our clients. We provide array of services like Air/Sea Import and Export Customs Clearance, Air/Sea Import and Export Freight Forwarding, Transportation, Sourcing/ Imports from China, Warehousing, Liaison with Allied Government Departments, Foreign Trade Consultancy etc. We have a team of professionals who manage your cargo from the point of pickup till the point of delivery in the most efficient and time bound manner.</p>
              </div>

              <div className='w-75 pl-4 pr-5'>
                <h3>WHO WE ARE</h3>
                <p><b>Our Mission</b></p>
                <p>First worldwide International FZE mission remains to “Deliver Service Excellence” and become the world’s preferred Clearing, Forwarding, Transportation and Sourcing company by applying insight, quality and innovation.</p>

                <p><b>Our Vision</b></p>
                <p>To establish First worldwide International FZE as the most leading Worldwide Logistics and Supply Chain Management company as a trusted partner to all our clients.</p>

                <p><b>Core Values</b></p>
                <p>First worldwide International FZE has structured itself on the basic values like Trust, Timeliness, Honesty, Professionalism, Integrity, Excellence, Commitment etc.</p>
              </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default IntroSection;
import HeaderImg from '../../assets/icon-big-two.png'
import '../intro/section.styled.css'
import Servicescard from './services-card.component';


const SERVICES_ARRAY = [
  {
    id: 1,
    Title: 'SEA CARGO',
    Description: 'We are one of the most experienced global ocean cargo specialised, providing a wide range of load shipment administrations.',
    Image: 'bg-img-1'
  },
  {
    id: 2,
    Title: 'LOAD & UNLOAD',
    Description: 'We have a team of full-service delivery specialists who handle every aspect of the delivery process.',
    Image: 'bg-img-2'
  },
  {
    id: 3,
    Title: 'SHIPPING AGENTS',
    Description: 'Our expert cope with patron help because it identifies with conveyances, requesting, following, arranging, and announcing.',
    Image: 'bg-img-3'
  },
  {
    id: 4,
    Title: 'WAREHOUSING',
    Description: 'Our general begin to complete transportation association unearths the adaptable port to your necessities.',
    Image: 'bg-img-4'
  },
  {
    id: 5,
    Title: 'FREIGHT FORWARDING',
    Description: 'Having own office in China, we help products sourcing/ imports from China to India for best price and quality.',
    Image: 'bg-img-5'
  },
  {
    id: 6,
    Title: 'TRANSPORTATION',
    Description: 'We have a dedicated fleet of Trucks & Vehicles catering to special time bound cargo.',
    Image: 'bg-img-6'
  },
  {
    id: 7,
    Title: 'END TO END LOGISTICS',
    Description: 'We offer Supply Chain Logistics solutions from origin to point of consumption across leading industries.',
    Image: 'bg-img-7'
  },
  {
    id: 8,
    Title: 'FOREIGN TRADE CONSULTANCY',
    Description: 'We provide professional import export consultancy regarding clearing, forwarding, transportation and sourcing.',
    Image: 'bg-img-2'
  },

]

const ServicesSection = () => {

    return (
      <div className="container light-grey">
        <div className='default-section m-auto'>
          <h3>What We Do</h3>
          <h2 className='header-with-img mb-5'>Our Best Services
              <img src={HeaderImg} alt='' />
          </h2>
          <div className='services-card-wrapper'>
            {
              SERVICES_ARRAY.map((service) => {
                return  (
                  <Servicescard key={service.id} service={service}/>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesSection;
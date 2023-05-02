import React, { useState } from 'react';

import '../intro/section.styled.css'

const Servicescard = ({service}) => {
    const {Title, Description, Image} =  service
    
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`cards-basic services-card ${Image}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {
        !isHovered && <h4 className='blue-bg'>{Title}</h4>
        }
        {isHovered && (
        <div className='services-card-hover'>
            <h4>{Title}</h4>
            <p>{Description}</p>
        </div>
        )}
    </div>
  )
}

export default Servicescard;
import { Link } from 'react-router-dom';

import './notification-bar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NotificationPanel = ({notificationToggle}) => {
  return (
    <div>
      <div className='notification'>
        <ul className='notification-modal pt-3 pb-2 pr-2'>
          <span onClick={notificationToggle} className='notification-close f-size-1'>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </span>
          <li>You have a new order from <Link className='f-weight-600'>Shivam</Link></li>
          <li>Small Cylinders are low on stock <Link href='/src/routes/seller-page/seller-page.component.jsx' className='f-weight-600'>Click here to place order</Link></li>
          <li>You have a new order from <Link className='f-weight-600'>Rohit</Link></li>
          <li>Pay for your previous order. <Link className='f-weight-600'>Paid with cash?</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationPanel;
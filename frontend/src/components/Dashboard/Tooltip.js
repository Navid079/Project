import React from 'react';
import './Tooltip.css';

export default function Tooltip({
  className,
  name,
  lastName,
  shopName,
  href,
  status,
}) {
  return (
    <div className={`tooltip ${className}`}>
      <div className='tooltip__container-1'>
        <div className='tooltip__container-2'>
          <h4 className='tooltip__name'>{name}</h4>
          <h4 className='tooltip__last-name'>{lastName}</h4>
        </div>
        <h4 className='tooltip__shop-name'>{shopName}</h4>
      </div>
      <a className='tooltip__link' href={href}>
        تکمیل اطلاعات کاربری
      </a>
      <h4 className='tooltip__status'>{status}</h4>
    </div>
  );
}

import React from 'react';
import Toggle from '../components/UI/Toggle';
import TextInputO from '../components/UI/TextInput/TextInputO';
import Button from '../components/UI/Button/Button';

import './ShopIndex.css';

export default function ShopIndex() {
  return (
    <div className="shop-index__container">
      <div className="shop-index__login">
        <Toggle className="shop-index__toggle" left="ورود" right="ثبت نام" />
        <TextInputO
          className="shop-index__input"
          placeholder="نام کاربری"
          icon="healthicons:ui-user-profile-outline"
        />
        <TextInputO
          className="shop-index__input"
          placeholder="گذرواژه"
          icon="carbon:password"
        />
        <a className="shop-index__link" href="http://localhost:3000">
          حساب کاربری ندارید؟
        </a>
        <div className="shop-index__message"></div>
        <Button className="shop-index__button">ورود</Button>
      </div>
      <svg
        className='shop-index__logo-container'
        viewBox="0 0 671 830"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M97.0297 0.5H568.414C624.471 0.5 669.914 45.9431 669.914 102V728C669.914 784.057 624.471 829.5 568.414 829.5H199.029C142.975 829.5 97.3 784.095 94.0209 728.108C88.717 637.55 75.3901 505.993 41.8827 416.824C30.7753 387.265 15.0648 339.174 6.55188 285.738C-1.96225 232.295 -3.26881 173.552 14.3865 122.664C35.6227 61.4537 56.3689 30.9067 71.7607 15.6678C79.4544 8.05055 85.808 4.26029 90.2154 2.37372C92.4195 1.43027 94.1391 0.961996 95.2989 0.729505C95.8789 0.613239 96.3192 0.55587 96.6106 0.527564C96.7563 0.51341 96.8648 0.50652 96.9348 0.503167C96.9699 0.501491 96.9953 0.500699 97.011 0.500326L97.0273 0.500023L97.0288 0.5H97.0297Z"
          fill="#324E7B"
          stroke="#BFDBFE"
        />
      </svg>

      <div className="shop-index__signup"></div>
    </div>
  );
}

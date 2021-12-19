import React from 'react';
import Toggle from '../components/UI/Toggle';
import TextInputO from '../components/UI/TextInput/TextInputO';
import Button from '../components/UI/Button/Button';

import './ShopIndex.css';
import TextInput from '../components/UI/TextInput/TextInput';

export default function ShopIndex() {
  return (
    <div className="shop-index__container">
      <div className="shop-index__left">
        <div className="shop-index__login">
          <Toggle className="shop-index__toggle" left="ورود" right="ثبت نام" />
          <div
            className="shop-index__login-container"
            
          >
            <TextInputO
              className="shop-index__input"
              inputClassName="shop-index__input--input"
              placeholder="نام کاربری"
              icon="healthicons:ui-user-profile-outline"
            />
            <TextInputO
              className="shop-index__input"
              type="password"
              placeholder="گذرواژه"
              icon="carbon:password"
            />
            <a className="shop-index__link" href="http://localhost:3000">
              حساب کاربری ندارید؟
            </a>
          </div>
          <div className="shop-index__signup-container" style={{ display: 'none' }}>
            <TextInputO
              className="shop-index__input"
              placeholder="نام کاربری"
              icon="healthicons:ui-user-profile-outline"
              flipped={true}
            />
            <TextInputO
              className="shop-index__input"
              placeholder="تلفن همراه"
              icon="healthicons:ui-user-profile-outline"
              flipped={true}
            />
            <TextInputO
              className="shop-index__input"
              placeholder="ایمیل"
              icon="healthicons:ui-user-profile-outline"
              flipped={true}
            />
            <div className="shop-index__password-container">
              <TextInputO
                className="shop-index__input shop-index__input--flexed"
                placeholder="گذرواژه"
                icon="healthicons:ui-user-profile-outline"
                flipped={true}
              />
              <TextInput
                className="shop-index__input shop-index__input--flexed"
                placeholder="تایید گذرواژه"
                icon="healthicons:ui-user-profile-outline"
                flipped={true}
              />
            </div>
          </div>
          <div className="shop-index__message"></div>
          <Button className="shop-index__button">ورود</Button>
        </div>
      </div>
      <div className="shop-index__logo-container" />
    </div>
  );
}

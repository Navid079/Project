import React from 'react';
import { Icon } from '@iconify/react';
import Accordion from './../../components/UI/Accordion/Accordion';
import Toggle from './../../components/UI/Toggle';
import TextInput from './../../components/UI/TextInput/TextInput';

import './Profile.css';

export default function Profile() {
  const personalSection = (
    <Accordion title='تکمیل اطلاعات شخصی' inactive>
      <div className='profile__accordion-body'>
        <div className='profile__input-container'>
          <TextInput
            className='profile__input profile__small-input'
            placeholder='نام'
          />
          <TextInput
            className='profile__input profile__small-input'
            placeholder='نام خانوادگی'
          />
        </div>
        <TextInput className='profile__input' placeholder='کد ملی' />
        <TextInput className='profile__input' placeholder='شماره شناسنامه' />
        <div className='profile__input-container'>
          <TextInput
            className='profile__input profile__large-input'
            placeholder='آدرس'
          />
          <TextInput
            className='profile__input profile__small-input'
            placeholder='کد پستی'
          />
          <TextInput
            className='profile__input profile__small-input'
            placeholder='تلفن'
          />
        </div>
      </div>
    </Accordion>
  );

  const uploadSection = <Accordion title='آپلود اطلاعات' inactive>
    <div className='profile__accordion-body'></div>
  </Accordion>;

  return <div style={{ width: '100%' }}>{personalSection}</div>;
}

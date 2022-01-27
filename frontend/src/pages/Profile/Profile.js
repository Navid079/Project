import React, { useRef, useState } from 'react';
import Accordion from './../../components/UI/Accordion/Accordion';
import TextInput from './../../components/UI/TextInput/TextInput';
import OrderedList from '../../components/UI/OrderedList/OrderedList';

import './Profile.css';
import UploadButton from '../../components/Profile/UploadButton';

export default function Profile() {
  const [personalProgress, setPersonalProgress] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [visualProgress, setVisualProgress] = useState(100);

  const firstName = useRef();
  const lastName = useRef();
  const nationalCode = useRef();
  const idNumber = useRef();
  const shopAddress = useRef();
  const postalCode = useRef();

  const personalSection = (
    <Accordion title='تکمیل اطلاعات شخصی' inactive>
      <div className='profile__accordion-body'>
        <div className='profile__input-container'>
          <TextInput
            className='profile__input profile__small-input'
            placeholder='نام'
            reference={firstName}
          />
          <TextInput
            className='profile__input profile__small-input'
            placeholder='نام خانوادگی'
            reference={lastName}
          />
        </div>
        <TextInput
          className='profile__input'
          placeholder='کد ملی'
          reference={nationalCode}
        />
        <TextInput
          className='profile__input'
          placeholder='شماره شناسنامه'
          reference={idNumber}
        />
        <div className='profile__input-container'>
          <TextInput
            className='profile__input profile__large-input'
            placeholder='آدرس'
            reference={shopAddress}
          />
          <TextInput
            className='profile__input profile__small-input'
            placeholder='کد پستی'
            reference={postalCode}
          />
          <TextInput
            className='profile__input profile__small-input'
            placeholder='تلفن'
          />
        </div>
      </div>
    </Accordion>
  );

  const uploadSection = (
    <Accordion title='آپلود اطلاعات' inactive>
      <div className='profile__accordion-body'>
        <UploadButton>آپلود مدارک</UploadButton>
      </div>
    </Accordion>
  );

  const visualSection = <Accordion title='اطلاعات نمایشی' inactive></Accordion>;

  const listItems = [
    { item: personalSection, progress: personalProgress },
    { item: uploadSection, progress: uploadProgress },
    { item: visualSection, progress: visualProgress },
  ];

  const list = <OrderedList>{listItems}</OrderedList>;

  return <div className='profile'>{list}</div>;
}

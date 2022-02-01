import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from './../../components/UI/Accordion/Accordion';
import TextInput from './../../components/UI/TextInput/TextInput';
import OrderedList from '../../components/UI/OrderedList/OrderedList';

import './Profile.css';
import UploadButton from '../../components/Profile/UploadButton';
import FormContext from '../../ContextManager/FormContextManager/FormContext';

import { profilePatchApiCall } from '../../API_Calls/ProfileApiCall';
import profileIsComplete from '../../utils/profileIsCompleted';

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

  const context = useContext(FormContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (profileIsComplete(context)) {
      navigate('/dashboard');
    }
  });

  const userProfile = useRef({
    firstName: '',
    lastName: '',
    nationalCode: '',
    idNumber: '',
    shopAddress: '',
    postalCode: '',
  });

  const inputBlurHandler = (event) => {
    switch (event.target) {
      case firstName.current:
        if (
          userProfile.current.firstName === '' &&
          firstName.current.value != ''
        ) {
          setPersonalProgress(personalProgress + 15);
        } else if (
          userProfile.current.firstName !== '' &&
          firstName.current.value === ''
        ) {
          setPersonalProgress(personalProgress - 15);
        }
        userProfile.current.firstName = firstName.current.value;
        break;
      case lastName.current:
        if (
          userProfile.current.lastName === '' &&
          lastName.current.value != ''
        ) {
          setPersonalProgress(personalProgress + 15);
        } else if (
          userProfile.current.lastName !== '' &&
          lastName.current.value === ''
        ) {
          setPersonalProgress(personalProgress - 15);
        }
        userProfile.current.lastName = lastName.current.value;
        break;
      case nationalCode.current:
        if (
          userProfile.current.nationalCode === '' &&
          nationalCode.current.value != ''
        ) {
          setPersonalProgress(personalProgress + 15);
        } else if (
          userProfile.current.nationalCode !== '' &&
          nationalCode.current.value === ''
        ) {
          setPersonalProgress(personalProgress - 15);
        }
        userProfile.current.nationalCode = nationalCode.current.value;
        break;
      case idNumber.current:
        if (
          userProfile.current.idNumber === '' &&
          idNumber.current.value != ''
        ) {
          setPersonalProgress(personalProgress + 15);
        } else if (
          userProfile.current.idNumber !== '' &&
          idNumber.current.value === ''
        ) {
          setPersonalProgress(personalProgress - 15);
        }
        userProfile.current.idNumber = idNumber.current.value;
        break;
      case shopAddress.current:
        if (
          userProfile.current.shopAddress === '' &&
          shopAddress.current.value != ''
        ) {
          setPersonalProgress(personalProgress + 25);
        } else if (
          userProfile.current.shopAddress !== '' &&
          shopAddress.current.value === ''
        ) {
          setPersonalProgress(personalProgress - 25);
        }
        userProfile.current.shopAddress = shopAddress.current.value;
        break;
      case postalCode.current:
        if (
          userProfile.current.postalCode === '' &&
          postalCode.current.value != ''
        ) {
          setPersonalProgress(personalProgress + 15);
        } else if (
          userProfile.current.postalCode !== '' &&
          postalCode.current.value === ''
        ) {
          setPersonalProgress(personalProgress - 15);
        }
        userProfile.current.postalCode = postalCode.current.value;
        break;
    }
    const requestBody = {
      message: '',
      data: userProfile.current,
    };

    profilePatchApiCall(context.auth, requestBody, context.dispatch);
  };

  const personalSection = (
    <Accordion title='تکمیل اطلاعات شخصی' inactive>
      <div className='profile__accordion-body'>
        <div className='profile__input-container'>
          <TextInput
            className='profile__input profile__small-input'
            placeholder='نام'
            reference={firstName}
            onBlur={inputBlurHandler}
          />
          <TextInput
            className='profile__input profile__small-input'
            placeholder='نام خانوادگی'
            reference={lastName}
            onBlur={inputBlurHandler}
          />
        </div>
        <TextInput
          className='profile__input'
          placeholder='کد ملی'
          reference={nationalCode}
          onBlur={inputBlurHandler}
        />
        <TextInput
          className='profile__input'
          placeholder='شماره شناسنامه'
          reference={idNumber}
          onBlur={inputBlurHandler}
        />
        <div className='profile__input-container'>
          <TextInput
            className='profile__input profile__large-input'
            placeholder='آدرس'
            reference={shopAddress}
            onBlur={inputBlurHandler}
          />
          <TextInput
            className='profile__input profile__small-input'
            placeholder='کد پستی'
            reference={postalCode}
            onBlur={inputBlurHandler}
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

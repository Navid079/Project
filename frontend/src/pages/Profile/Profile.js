import React from 'react';
import { Icon } from '@iconify/react';
import Accordion from './../../components/UI/Accordion/Accordion';
import Toggle from './../../components/UI/Toggle';
import TextInput from './../../components/UI/TextInput/TextInput';

import './Profile.css';

export default function Profile() {
  const personalSection = (
    <Accordion className='profile__personal' title='تکمیل اطلاعات شخصی'>
      <div className='profile__personal__container'>
        <TextInput
          className='profile__personal__name'
          placeholder='نام'
        ></TextInput>
        <TextInput
          className='profile__personal__lastname'
          placeholder='نام خانوادگی'
        ></TextInput>
      </div>
      <TextInput
        className='profile__personal__national-code'
        placeholder='کد ملی'
      ></TextInput>
      <TextInput
        className='profile__personal__id'
        placeholder='شماره شناسنامه'
        type='number'
      ></TextInput>
      <TextInput
        className='profile__personal__address'
        placeholder='آدرس'
      ></TextInput>
      <div className='profile__personal__container'>
        <TextInput
          className='profile__personal__postal-code'
          placeholder='کد پستی'
          type='number'
        ></TextInput>
        <TextInput
          className='profile__personal__phone'
          placeholder='تلفن'
          type='number'
        ></TextInput>
      </div>
    </Accordion>
  );

  const uploadSection = (
    <Accordion className='profile__upload' title='آپلود اطلاعات'>
      <Icon className='profile__upload__icon-1' icon='ic:outline-upload-file' />
      <h6 className='profile__upload__text'>آپلود مدارک</h6>
      <Icon
        className='profile__upload__icon-2'
        icon='fluent:document-question-mark-16-regular'
      />
    </Accordion>
  );

  const infoSection = (
    <Accordion className='profile__information' title='اطلاعات نمایشی'>
      {/*  */}
    </Accordion>
  );

  return (
    <div className='profile'>
      <Toggle
        className='profile__toggle'
        leftLabel='فیلدهای غیر ضروری'
        rightLabel='فیلدهای ضروری'
      ></Toggle>
      {personalSection}
      {uploadSection}
      {infoSection}
    </div>
  );
}

import React from 'react'
import { Icon } from '@iconify/react';
import TextInput from './../UI/TextInput/TextInput';

import './SearchInput.css'

export default function SearchInput() {
  return (
    <div className="search-input">
      <TextInput
        className='search-input__input'
        type='search'
        placeholder='جستجو'
      ></TextInput>
      <Icon className='search-input__icon' icon='fluent:search-24-regular' />
    </div>
  )
}

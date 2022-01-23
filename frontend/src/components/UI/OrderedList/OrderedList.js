import React from 'react';
import ListBullet from '../ListItem/ListBullet';

import './OrderedList.css';

const OrderedList = ({ className, children }) => {
  const items = children.map(({ progress, item }, index) => (
    <li>
      <ListBullet number={index + 1} progress={progress} />
      {item}
    </li>
  ));

  return <ol className={`ordered-list ${children}`}>{items}</ol>;
};

export default OrderedList;

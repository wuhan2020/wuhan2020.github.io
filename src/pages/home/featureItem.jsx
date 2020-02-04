import React from 'react';

const Item = (props) => {
  const { feature } = props;
  return (
    <li>
      <div>
        <h4>{feature.title}</h4>
        <p>{feature.content}</p>
      </div>
    </li>
  );
};

export default Item;

import React from 'react';

const Image = ({url, title}) => {
  return (
    <li>
      <image src={url} alt={title} />
    </li>
  );
};
export default Image;

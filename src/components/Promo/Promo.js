import React from 'react';

function Promo(props) {
  const { img } = props;
  return (
    <img
      className='d-block mb-3'
      src={img}
      alt=''
      style={{ width: 'auto', height: '300px' }}
    />
  );
}
export default Promo;

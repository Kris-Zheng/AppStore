import React from 'react';
import { history } from 'umi';

const smallBanner = (props) => {
  return props.data.map((item, key) => (
    <div key={key} onClick={() => history.push('./topTen')}>
      <img src={item.img} style={{ width: '100%', borderRadius: 10 }} />
      <p style={{ marginTop: '0.3125rem' }}>{item.subTitle}</p>
    </div>
  ));
};

export default smallBanner;

import React from 'react';
import img from '../../asserts/111.png';
import { history } from 'umi';

const smallBanner = () => {
  return (
    <div onClick={() => history.push('./topTen')}>
      <img src={img} style={{ width: '100%', borderRadius: 10 }} />
      <p style={{ marginTop: '0.3125rem' }}>
        精选十佳卡牌对战游戏
      </p>
    </div>
  );
};

export default smallBanner;

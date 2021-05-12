import React, { useEffect, useState } from 'react';
import iosArrow from '../../../../asserts/iosArrow.svg';
import arrow from '../../../../asserts/arrow.svg';
import styles from './index.less';

const header = (props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (props.data < 50) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  });

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: isShown ? '#ebebeb' : 'transparent' }}
    >
      <img
        src={iosArrow}
        alt="logo"
        style={{
          color: 'rgb(255,255,255)',
          display: isShown ? 'none' : 'inline',
          marginLeft: 10,
        }}
        onClick={() => {
          window.history.back(-1);
        }}
      />
      <span
        onClick={() => window.history.back(-1)}
        style={
          isShown
            ? {
                display: 'flex',
                alignItems: 'center',
                fontSize: 16,
                color: '#1296db',
              }
            : { display: 'none' }
        }
      >
        <img src={arrow} alt="logo" />
        返回
      </span>
    </header>
  );
};

export default header;

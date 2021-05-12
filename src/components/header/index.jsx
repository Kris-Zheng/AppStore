import React, { useState, useEffect } from 'react';
import arrow from '../../asserts/arrow.svg';
import styles from './index.less';

const header = (props) => {
  const [isScroll, setIsScroll] = useState(false);

  const onScroll = () => {
    const y = document.documentElement.scrollTop;
    if (y > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  });

  return (
    <header
      style={
        isScroll
          ? {
              backgroundColor: 'rgb(240, 240, 240)',
              borderBottom: '1px solid rgb(211, 211, 211)',
              position: 'fixed',
              top: 0,
              width: '100%',
              zIndex: 1,
            }
          : {
              backgroundColor: 'transparent',
            }
      }
      className={styles.header}
    >
      <h3 style={{ color: props.header ? 'black' : 'transparent' }}>
        {props.title}
      </h3>
      <div
        style={
          props.icon
            ? {
                position: 'absolute',
                top: 15,
                fontSize: 16,
                color: '#1296db',
                display: 'flex',
                alignItems: 'center',
              }
            : { display: 'none' }
        }
        onClick={() => window.history.back(-1)}
      >
        <img src={arrow} alt="logo" />
        <span>返回</span>
      </div>
    </header>
  );
};

export default header;

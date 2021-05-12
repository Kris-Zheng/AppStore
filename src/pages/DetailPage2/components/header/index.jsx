import React, { useEffect, useState } from 'react';
import arrow from '../../../../asserts/arrow.svg';
import styles from './index.less';

const header = (props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (props.data < 45) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  });

  return (
    <header
      className={styles.header}
      style={
        isShown
          ? {
              backgroundColor: '#ebebeb',
              borderBottom: '1px solid rgb(211, 211, 211)',
            }
          : {
              backgroundColor: 'transparent',
            }
      }
    >
      <div
        style={{ display: 'flex', alignItems: 'center'}}
        onClick={() => window.history.back(-1)}
      >
        <img src={arrow} alt="icon" />
        <span>返回</span>
      </div>
    </header>
  );
};

export default header;

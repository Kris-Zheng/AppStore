import React, { useRef, useState, useEffect } from 'react';
import user from '../../asserts/user.svg';
import styles from './index.less';

const title = (props) => {
  const itemRef = useRef();
  const [isShown, setIsShown] = useState(false);

  const onScroll = () => {
    const y = document.documentElement.scrollTop || document.body.scrollTop;
    if (y > itemRef.current?.offsetTop + itemRef.current?.clientHeight - 54) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  });

  useEffect(() => {
    if (props.callBack) {
      props.callBack(isShown);
    } else {
      return;
    }
  }, [isShown]);

  return (
    <div className={styles.title} ref={itemRef}>
      <h5>{props?.date}</h5>
      <div>
        <h1>{props?.title}</h1>
        <img src={user} alt="logo" />
      </div>
    </div>
  );
};

export default title;

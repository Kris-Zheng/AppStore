import React from 'react';
import styles from './index.less';

const card = (props) => {
  return (
    <>
      <div className={styles.title}>
        <h4 style={{ color: 'lightgray' }}>{props.data?.title}</h4>
        <h1 style={{ color: 'white' }}>{props.data?.des}</h1>
      </div>
      <span className={styles.text}>{props.data?.text}</span>
      <img src={props.data?.img} style={{ width: '100%'}} />
    </>
  );
};

export default card;

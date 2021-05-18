import React from 'react';
import { history } from 'umi';
import styles from './index.less';

const card = (props) => {
  return (
    <div className={styles.card} onClick={() => history.push('./cardPage')}>
      <div className={styles.title}>
        <h4 style={{ color: 'lightgray' }}>{props.data?.title}</h4>
        <h1 style={{ color: 'white' }}>{props.data?.subTitle}</h1>
      </div>
      <span className={styles.text}>{props.data?.des}</span>
      <img src={props.data?.img} style={{ width: '100%' }} />
    </div>
  );
};

export default card;

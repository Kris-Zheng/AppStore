import React from 'react';
import { history } from 'umi';
import styles from './index.less';

const bigBanner = (props) => {
  return props.data.map((item, key) => (
    <div
      key={key}
      className={styles.bigBanner}
      onClick={() => history.push('./details')}
    >
      <h5>{item.title}</h5>
      <h2>{item.subTitle}</h2>
      <h3>{item.des}</h3>
      <img src={item.banner} style={{ width: '100%', borderRadius: 10 }} />
    </div>
  ));
};

export default bigBanner;

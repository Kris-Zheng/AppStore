import React from 'react';
import Row from '../row';
import styles from './index.less';

const apps = (props) => {
  let { data } = props.data;

  return (
    <div className={styles.appList}>
      <h4>{props.data.title}</h4>
      <h2>{props.data.subTitle}</h2>
      <Row data={data} />
    </div>
  );
};

export default apps;

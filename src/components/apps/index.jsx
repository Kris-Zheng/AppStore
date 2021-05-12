import React from 'react';
import Row from '../row';
import styles from './index.less';

const apps = () => {
  return (
    <div className={styles.appList}>
      <h4>专题</h4>
      <h2>时下畅销游戏</h2>
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default apps;

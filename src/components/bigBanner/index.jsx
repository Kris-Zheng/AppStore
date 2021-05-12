import React from 'react';
import {history} from 'umi';
import banner from '../../asserts/15.png';
import styles from './index.less';

const bigBanner = () => {
  return (
    <div className={styles.bigBanner} onClick={()=>history.push('./details')}>
      <h5>新游戏</h5>
      <h2>秦时明月世界饿了评论噼里啪啦往发布会</h2>
      <h3>重温经典国漫 游历大秦山河恶法八宝饭北方南方</h3>
      <img src={banner} style={{ width: '100%', borderRadius: 10 }} />
    </div>
  );
};

export default bigBanner;

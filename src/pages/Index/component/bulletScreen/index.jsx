import React from 'react';
import Bullets from '../../../../components/bullets';
import { history } from 'umi';
import styles from './index.less';

const BulletsScreen = () => {
  return (
    <div
      className={styles.bulletsScreen}
      onClick={() => history.push('./bulletsPage')}
    >
      <h4>限时特惠</h4>
      <h1>春日游戏限时特惠</h1>
      <Bullets />
      <Bullets />
      <Bullets />
    </div>
  );
};

export default BulletsScreen;

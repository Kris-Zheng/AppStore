import React from 'react';
import Bullets from '../../../../components/bullets';
import { history } from 'umi';
import styles from './index.less';

const BulletsScreen = (props) => {
  return (
    <div
      className={styles.bulletsScreen}
      onClick={() => history.push('./bulletsPage')}
    >
      <h4>{props.data.title}</h4>
      <h1>{props.data.subTitle}</h1>
      {props.data.data.map((item, key) => (
        <div key={key}>
          <Bullets data={item} />
        </div>
      ))}
    </div>
  );
};

export default BulletsScreen;

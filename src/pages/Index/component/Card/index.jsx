import React from 'react';
import { history } from 'umi';
import CardContent from '../../../../components/card';
import styles from './index.less';

const Card = (props) => {
  return (
    <div className={styles.card} onClick={() => history.push('./cardPage')}>
      <CardContent data={props.data} />
    </div>
  );
};

export default Card;

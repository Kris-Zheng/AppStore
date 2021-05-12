import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Link, history } from 'umi';
import styles from './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1930262_dila9tduobn.js',
});

const hotCategory = (props) => {
  const content = props.data.map((item, key) => (
    <div
      key={key}
      className={styles.content}
      onClick={() => history.push('./game')}
    >
      <IconFont type={item.icon} style={{ fontSize: 20 }} />
      <div className={styles.item}>{item.name}</div>
    </div>
  ));

  return (
    <div className={styles.hotCategory}>
      <div className={styles.title}>
        <h2 style={{ margin: 0 }}>{props.title}</h2>
        <Link to="./category" style={{ fontSize: 16 }}>
          查看全部
        </Link>
      </div>
      {content}
    </div>
  );
};

export default hotCategory;

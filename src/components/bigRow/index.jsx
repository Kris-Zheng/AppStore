import React from 'react';
import { Row, Col, Button } from 'antd';
import { history } from 'umi';
import icon from '../../asserts/2.png';
import styles from './index.less';

const bigRow = () => {
  return (
    <Row onClick={() => history.push('./details2')}>
      <Col span={7} style={{ padding: '10px 0' }}>
        <img src={icon} style={{ width: '100%', borderRadius: 15 }} />
      </Col>
      <Col span={16} offset={1} className={styles.content}>
        <div className={styles.titles}>
          <h3>抖音师傅你弹幕更好吗好看吗丰富</h3>
          <h4>记录美好生活阿妇女节啊嗯放假额安静呢</h4>
        </div>
        <Button
          shape="round"
          style={{
            color: 'rgb(24, 144, 255)',
            backgroundColor: 'rgb(228, 228, 228)',
            maxWidth: 70,
          }}
        >
          获取
        </Button>
      </Col>
    </Row>
  );
};

export default bigRow;

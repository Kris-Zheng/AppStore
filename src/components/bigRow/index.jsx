import React from 'react';
import { Row, Col, Button } from 'antd';
import { history } from 'umi';
import icon from '../../asserts/2.png';
import styles from './index.less';

const bigRow = (props) => {
  const list = props.data.map((item, key) => (
    <Row onClick={() => history.push('./details2')} key={key}>
      <Col span={7} style={{ padding: '10px 0' }}>
        <img src={icon} style={{ width: '100%', borderRadius: 15 }} />
      </Col>
      <Col span={16} offset={1} className={styles.content}>
        <div className={styles.titles}>
          <h3>{item.title}</h3>
          <h4>{item.subTitle}</h4>
        </div>
        <Button
          onClick={() => window.open('https://wwww.baidu.com')}
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
  ));

  return list;
};

export default bigRow;

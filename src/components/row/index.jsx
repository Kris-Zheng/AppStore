import React from 'react';
import { history } from 'umi';
import { Row, Col, Button } from 'antd';
import styles from './index.less';

const row = (props) => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgb(211,211,211)',
  };

  const list = props.data.map((item, key) => (
    <Row align="stretch" onClick={() => history.push('./details')} key={key}>
      <Col span={5} style={{ padding: '5px 0' }}>
        <img src={item.icon} style={{ width: '100%', borderRadius: 15 }} />
      </Col>
      <Col span={18} offset={1} style={style}>
        <div className={styles.titles}>
          <h3>{item.title}</h3>
          <h4>{item.subTitle}</h4>
        </div>
        <Button
          onClick={() => window.open('https://www.baidu.com/')}
          shape="round"
          style={{
            color: 'rgb(24, 144, 255)',
            backgroundColor: 'rgb(228, 228, 228)',
          }}
        >
          获取
        </Button>
      </Col>
    </Row>
  ));

  return list;
};

export default row;

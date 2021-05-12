import React from 'react';
import { history } from 'umi';
import { Row, Col, Button } from 'antd';
import icon from '../../asserts/2.png';
import styles from './index.less';

const RowFomat = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgb(211,211,211)',
    padding: '15px 0',
  };

  const toHref = () => {
    history.push('./details');
  };

  return (
    <Row align="middle">
      <Col span={5} >
        <img src={icon} style={{ width: '100%', borderRadius: 15 }} />
      </Col>
      <Col span={18} offset={1} style={style} onClick={() => toHref()}>
        <div className={styles.titles}>
          <h3>抖音能放啥感觉呢</h3>
          <h4>记录美好生活无纺布生机勃发建设步伐加快</h4>
        </div>
        <Button
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
  );
};

export default RowFomat;

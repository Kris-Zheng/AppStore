import React, { useEffect, useState } from 'react';
import { Row, Col, Progress } from 'antd';
import icon from '../../asserts/star.svg';
import styles from './index.less';

const stars = () => {
  const [star, setStar] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 5; ++i) {
      const row = [];
      for (let j = 0; j < i; ++j) {
        row.push(<span key={j}>&emsp;</span>);
      }
      for (let v = i; v < 5; ++v) {
        row.push(<img src={icon} key={v}/>);
      }
      setStar((star) => [...star, row]);
    }
  }, []);

  return (
    <Row align="middle" className={styles.rate}>
      <Col span={7}>
        <h1>4.9</h1>
        <h4>满分5分</h4>
      </Col>
      <Col span={17} style={{ textAlign: 'right' }}>
        {star?.map((item, key) => (
          <div key={key} className={styles.percent}>
            <i>{item}</i>
            <Progress
              percent={50}
              showInfo={false}
              strokeColor="gray"
              size="small"
              style={{ width: '60%', marginLeft: 10 }}
            />
          </div>
        ))}
        <p>12,702,267个评分</p>
      </Col>
    </Row>
  );
};

export default stars;

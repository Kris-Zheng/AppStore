import React from 'react';
import { Button, Row, Col } from 'antd';
import { history } from 'umi';
import pic from '../../asserts/10.png';
import styles from './index.less';

const recommendation = () => {
  const data = {
    img: pic,
    name: '围棋——单机版围棋入门阿鹅法法俄法俄法',
    des: '双人小游戏',
  };

  const content = [];

  const toHref = () => {
    history.push('./details')
  }

  const generateData = () => {
    for (let i = 0; i < 16; i++) {
      content.push(
        <Row align='middle' key={i} onClick={()=>toHref()}>
          <Col span={4}>
            <img src={data.img} style={{width:'100%'}}/>
          </Col>
          <Col className={styles.content} span={19} offset={1}>
            <div style={{maxWidth:'75%'}}>
              <h3>{data.name}</h3>
              <p>{data.des}</p>
            </div>
            <Button shape='round' className={styles.Button}>获取</Button>
          </Col>
        </Row>,
      );
    }
  };

  generateData();

  return (
    <div className={styles.list}>
      <h2>为你推荐</h2>
      {content}
    </div>
  );
};

export default recommendation;

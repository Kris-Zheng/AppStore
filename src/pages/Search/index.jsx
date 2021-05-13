import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Row from '../../components/row';
import styles from './index.less';

const search = () => {
  const [isShown, setIsShown] = useState(false);
  const [list, setList] = useState([]);

  const isHeaderShown = (value) => {
    setIsShown(value);
  };

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 16; i++) {
      data.push(<Row />);
    }
    setList(data);
  }, []);

  return (
    <>
      <Header title="搜索" header={isShown} />
      <Title title="搜索" callBack={isHeaderShown} />
      <main className={styles.main}>
        <div className={styles.more}>
          <h2>探索更多</h2>
          <ul>
            <li>小游戏</li>
            <li>网络电话</li>
            <li>rpg</li>
            <li>求职招聘</li>
          </ul>
        </div>
        <div className={styles.list}>
          {list.map((item, key) => (
            <div key={key}>{item}</div>
          ))}
        </div>
      </main>
      <div style={{ height: 70, width: '100%' }} />
      <Footer />
    </>
  );
};

export default search;

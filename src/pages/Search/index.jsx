import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Recommendation from '../../components/recommendation';
import styles from './index.less';

const search = () => {
  const [isShown, setIsShown] = useState(false);
  const isHeaderShown = (value) => {
    setIsShown(value);
  };
  return (
    <>
      <Header title="搜索" header={isShown} />
      <Title title="搜索" callBack={isHeaderShown} />
      <main className={styles.main}>
        <div className={styles.more}>
          <h2>探索更多</h2>
          <ul>
            <li style={{}}>小游戏</li>
            <li>网络电话</li>
            <li>rpg</li>
            <li>求职招聘</li>
          </ul>
        </div>
        <Recommendation />
      </main>
      <div style={{ height: 70, width: '100%' }} />
      <Footer />
    </>
  );
};

export default search;

import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Row from '../../components/row';
import icon from '../../asserts/2.png';
import styles from './index.less';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const search = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [isShown, setIsShown] = useState(false);

  const isHeaderShown = (value) => {
    setIsShown(value);
  };

  const receiveData = {
    name: '为你推荐',
    data: [
      {
        icon,
        title: '抖音',
        subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
        downloadLink: 'www.baidu.com',
      },
      {
        icon,
        title: '抖音',
        subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
        downloadLink: 'www.baidu.com',
      },
      {
        icon,
        title: '抖音',
        subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
        downloadLink: 'www.baidu.com',
      },
      {
        icon,
        title: '抖音',
        subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
        downloadLink: 'www.baidu.com',
      },
      {
        icon,
        title: '抖音',
        subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
        downloadLink: 'www.baidu.com',
      },
      {
        icon,
        title: '抖音',
        subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
        downloadLink: 'www.baidu.com',
      },
    ],
  };

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
          <h2>为你推荐</h2>
          <Row data={receiveData.data} />
        </div>
      </main>
      <div style={{ height: 70, width: '100%' }} />
      <Footer />
    </>
  );
};

export default search;

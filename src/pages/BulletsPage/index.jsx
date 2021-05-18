import React from 'react';
import { history } from 'umi';
import { useRequest } from 'ahooks';
import { queryNb } from '@/utils/api';
import Bullets from '../../components/bullets';
import Row from '../../components/row';
import icon from '../../asserts/2.png';
import styles from './index.less';

const svg = (
  <svg
    t="1618056329412"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3535"
    width="32"
    height="32"
  >
    <path
      d="M512 96C282.2 96 96 282.2 96 512s186.2 416 416 416 416-186.2 416-416S741.8 96 512 96z m105.4 566.6L512 557.2l-105.4 105.4c-12.4 12.4-32.8 12.4-45.2 0-6.2-6.2-9.4-14.4-9.4-22.6 0-8.2 3.2-16.4 9.4-22.6l105.4-105.4-105.4-105.4c-6.2-6.2-9.4-14.4-9.4-22.6 0-8.2 3.2-16.4 9.4-22.6 12.4-12.4 32.8-12.4 45.2 0l105.4 105.4 105.4-105.4c12.4-12.4 32.8-12.4 45.2 0 12.4 12.4 12.4 32.8 0 45.2L557.2 512l105.4 105.4c12.4 12.4 12.4 32.8 0 45.2-12.4 12.6-32.8 12.6-45.2 0z"
      p-id="3536"
      fill="#515151"
    ></path>
  </svg>
);

const BulletsPage = () => {
  const { data, error, loading } = useRequest(queryNb);

  const receiveData = {
    name: 'bullets',
    title: '限时特惠',
    subTitle: '春日游戏限时特惠',
    des:
      '许多游戏不仅玩法出众，更能带给你视觉和听觉的双重享受，甚至称得上是艺术品。下面这些作品都有着精美的画面和令人印象深刻的原声音乐，每一款都值得一试。',
    data: [
      [
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
      [
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
      [
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
    ],
  };

  return (
    <>
      <header className={styles.header}>
        <h4 style={{ color: '#888888', fontWeight: 'normal', margin: 0 }}>
          {receiveData.title}
        </h4>
        <h2>{receiveData.subTitle}</h2>
        <span
          style={{ position: 'fixed', top: 10, right: 10, zIndex: 1 }}
          onClick={() => window.history.back(-1)}
        >
          {svg}
        </span>
      </header>
      <main>
        <div className={styles.bulletsPage}>
          {receiveData.data.map((item, key) => (
            <div key={key}>
              <Bullets data={item} />
            </div>
          ))}
        </div>
        <p className={styles.des}>{receiveData.des}</p>
        <div className={styles.rows}>
          {receiveData.data.map((item, key) => {
            return (
              <div key={key}>
                <Row data={item} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default BulletsPage;

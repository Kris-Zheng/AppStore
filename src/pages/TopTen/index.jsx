import React, { useState, useEffect } from 'react';
import Row from '../../components/row';
import img from '../../asserts/111.png';
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

const TopTen = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const row = [];
    for (let i = 0; i < 10; ++i) {
      row.push(<Row />);
    }
    setContent(row);
  }, []);

  return (
    <main>
      <span
        style={{ position: 'fixed', top: 10, right: 10, zIndex: 1 }}
        onClick={() => window.history.back(-1)}
      >
        {svg}
      </span>
      <img src={img} alt="bg" style={{ width: '100%' }} />
      <div className={styles.title}>
        {/* <h3>编辑最爱</h3>
        <h1>精选十佳卡牌对战游戏</h1> */}
      </div>
      <div className={styles.content}>
        {content.map((item, key) => (
          <div key={key}>{item}</div>
        ))}
      </div>
    </main>
  );
};

export default TopTen;

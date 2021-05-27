import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'antd';
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

const VideoPlayer = () => {
  const [isBottom, setIsBottom] = useState(true);
  const ref = useRef();

  const receiveData = {
    name: 'videoPlayer',
    title: '今日 APP',
    subTitle: 'ASMR到底是什么？',
    des: '用《Glitche》玩转故障艺术',
    content:
      '豆腐脑是难上加难国家能够见到你就给你打几个男的就能感觉到你关机发外柔内刚爱疯妹妹佛啊没钱哦可让人绝望额前的，不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不不',
    play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    data: [
      {
        icon,
        title: '抖音',
        subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
        downloadLink: 'www.baidu.com',
      },
    ],
  };

  useEffect(() => {
    const height =
      document.body.clientHeight || document.documentElement.clientHeight;
    if (height <= ref.current.offsetTop + ref.current.offsetHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }, []);

  return (
    <main>
      <span
        style={{ position: 'fixed', top: 10, right: 10, zIndex: 1 }}
        onClick={() => window.history.back(-1)}
      >
        {svg}
      </span>
      <video style={{ width: '100%' }} controls="controls" loop={true}>
        <source src={receiveData.play_url} type="video/mp4" />
      </video>
      <div style={{ margin: '1rem' }}>
        <h4 style={{ margin: 0, color: '#888888' }}>{receiveData.title}</h4>
        <h2 style={{ margin: 0 }}>{receiveData.subTitle}</h2>
      </div>
      <p style={{ margin: '2rem 1rem', fontSize: 16, color: '#888888' }}>
        {receiveData.content}
      </p>
      <div
        ref={ref}
        className={styles.app}
        style={
          isBottom
            ? { position: 'static' }
            : { position: 'fixed', bottom: 0, width: '100%' }
        }
        onClick={() => history.push('./details')}
      >
        <img
          src={receiveData.data[0].icon}
          style={{ width: 100, borderRadius: 15 }}
        />
        <h2>{receiveData.data[0].title}</h2>
        <h4>{receiveData.data[0].subTitle}</h4>
        <Button type="primary" shape="round">
          获取
        </Button>
      </div>
    </main>
  );
};

export default VideoPlayer;

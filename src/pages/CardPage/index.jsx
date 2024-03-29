import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';
import Row from '../../components/row';
import pic1 from '../../asserts/333.png';
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

const CardPage = () => {
  const receiveData = {
    title: '今日推荐',
    subTitle: '带宠闯地牢',
    text: '体验Roguelike 游戏《提灯与地下城》',
    img: pic1,
    content:
      '双方难舍难分简介史蒂夫你放假森房间内释放技能升级妇女节苏丹诺夫几十年福建省带你飞上岛咖啡明年肯定是你分开时你打开菲尼克斯你疯狂的少年疯狂纳斯达克烦恼时看到你分开苏丹诺夫可是当你放开苏丹诺夫可是当你放开苏丹诺夫可是你开罚单的翻滚的发给你的难过的那个护卫很入味图文如图惹用途热议图恶意如图二一图二用途俄华人公会恶补你但是法家拂士积分榜上绝大部分就是不到附近上班的附近上班地方就是不简单方便的时间分别是',
    data: [
      {
        icon,
        title: '抖音',
        subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
        downloadLink: 'www.baidu.com',
      },
    ],
  };

  return (
    <main>
      <span
        style={{ position: 'fixed', top: 10, right: 10, zIndex: 1 }}
        onClick={() => window.history.back(-1)}
      >
        {svg}
      </span>
      <div className={styles.bg}>
        <img src={receiveData.img} style={{ width: '100%' }} alt="bg" />
        <div className={styles.title}>
          <h4 style={{ color: 'lightgray' }}>{receiveData.title}</h4>
          <h1 style={{ color: 'white' }}>{receiveData.subTitle}</h1>
          <p>{receiveData.text}</p>
        </div>
      </div>
      <div className={styles.row}>
        <Row data={receiveData.data} width="100%" />
      </div>
      <div className={styles.content}>
        <p>{receiveData.content}</p>
      </div>
      <div className={styles.app} onClick={() => history.push('./details')}>
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

export default CardPage;

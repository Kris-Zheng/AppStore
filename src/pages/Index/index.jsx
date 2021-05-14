import React from 'react';
import { useRequest } from 'ahooks';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Card from './component/Card';
import VideoPlayer from '../../components/videoPlayer';
import Bullets from './component/bulletScreen';
import Apps from '../../components/apps';
import pic1 from '../../asserts/333.png';
import { queryNb } from '@/utils/api';
import 'antd/dist/antd.css';
import styles from './index.less';

const cardContent = {
  title: '主打推荐',
  des: '带宠闯地牢',
  text: '体验Roguelike 游戏《提灯与地下城》',
  img: pic1,
};

const sources = {
  play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
  format: 'mp4',
};

const videoContent = {
  title: '今日 APP',
  text: 'ASMR到底是什么？',
  des: '用《Glitche》玩转故障艺术',
};

export default function IndexPage() {
  const { data, error, loading } = useRequest(queryNb);

  return (
    <>
      <Header title="Today" header={false} icon={false} />
      <Title date="3月4日 星期四" title="Today" />
      <main className={styles.main}>
        <Card data={cardContent} />
        <Apps />
        <VideoPlayer sources={sources} data={videoContent} />
        <Bullets />
      </main>
      <Footer />
    </>
  );
}

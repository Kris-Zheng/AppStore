import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BigRow from '../../components/bigRow';
import pic1 from '../../asserts/333.png';
import styles from './index.less';

const AppList = () => {
  const receiveData = {
    data: [
      {
        name: 'card',
        title: '主打推荐',
        subTitle: '带宠闯地牢',
        des: '体验Roguelike 游戏《提灯与地下城》',
        img: pic1,
      },
      {
        name: 'card',
        title: '主打推荐',
        subTitle: '带宠闯地牢',
        des: '体验Roguelike 游戏《提灯与地下城》',
        img: pic1,
      },
      {
        name: 'card',
        title: '主打推荐',
        subTitle: '带宠闯地牢',
        des: '体验Roguelike 游戏《提灯与地下城》',
        img: pic1,
      },
      {
        name: 'card',
        title: '主打推荐',
        subTitle: '带宠闯地牢',
        des: '体验Roguelike 游戏《提灯与地下城》',
        img: pic1,
      },
      {
        name: 'card',
        title: '主打推荐',
        subTitle: '带宠闯地牢',
        des: '体验Roguelike 游戏《提灯与地下城》',
        img: pic1,
      },
    ],
  };

  return (
    <>
      <Header title="我们都在玩" header={true} icon={true} />
      <main className={styles.main}>
        <BigRow data={receiveData.data} />
      </main>
      <Footer />
    </>
  );
};

export default AppList;

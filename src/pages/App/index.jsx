import React, { useState, useEffect } from 'react';
import { useRequest } from 'ahooks';
import { queryNb } from '@/utils/api';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import VariableCarousel from '../../components/variableCarousel';
import HotCategory from '../../components/hotCategory';
import Row from '../../components/row';
import BigRow from '../../components/bigRow';
import BigBanner from '../../components/bigBanner';
import SmallBanner from '../../components/smallBanner';
import Card from '../../components/card';
import VideoPlayer from '../../components/videoPlayer';
import Apps from '../../components/apps';
import icon from '../../asserts/2.png';
import pic1 from '../../asserts/333.png';
import banner from '../../asserts/15.png';
import img from '../../asserts/111.png';
import styles from './index.less';

const App = () => {
  const { data, error, loading } = useRequest(queryNb);
  const [isShown, setIsShown] = useState(false);
  const [width, setWidth] = useState();
  const receiveData = {
    name: 'BBB',
    icon,
    data: [
      {
        name: 'card',
        title: '主打推荐',
        subTitle: '带宠闯地牢',
        des: '体验Roguelike 游戏《提灯与地下城》',
        img: pic1,
      },
      {
        name: 'bigBanner',
        data: [
          [
            {
              title: '新游戏',
              subTitle: '秦时明月',
              des: '重温经典国漫 游历大秦山河',
              banner,
            },
          ],
          [
            {
              title: '新游戏',
              subTitle: '秦时明月反复额',
              des: '重温经典国漫 游历大秦山河',
              banner,
            },
          ],
          [
            {
              title: '新游戏',
              subTitle: '秦时明月',
              des: '重温经典国漫 游历大秦山河',
              banner,
            },
          ],
        ],
      },
      {
        name: 'row',
        title: '限时活动特别开启',
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
          ],
        ],
      },
      {
        name: 'smallBanner',
        title: '精选十佳',
        data: [
          [
            {
              subTitle: '十佳对战类',
              img,
            },
          ],
          [
            {
              subTitle: '十佳卡牌类',
              img,
            },
          ],
          [
            {
              subTitle: '十佳推理类',
              img,
            },
          ],
        ],
      },
      {
        name: 'bigRow',
        title: '限时活动特别开启',
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
          ],
          [
            {
              icon,
              title: '抖音',
              subTitle: '记录美好生活无纺布生机勃发建设步伐加快',
              downloadLink: 'www.baidu.com',
            },
          ],
        ],
      },
      {
        name: 'hotCategory',
        title: '热门类别',
        data: [
          { name: '益智解密区区饿饿饿饿版本', icon: 'icon-popcorn-icon' },
          { name: '动作', icon: 'icon-popcorn-icon' },
          { name: '角色扮演', icon: 'icon-popcorn-icon' },
          { name: '策略', icon: 'icon-popcorn-icon' },
          { name: '休闲', icon: 'icon-popcorn-icon' },
          { name: '体育', icon: 'icon-popcorn-icon' },
        ],
      },
    ],
  };

  const findData = (name) => {
    for (let i = 0; i < receiveData.data.length; ++i) {
      if (receiveData?.data[i].name === name) {
        return receiveData.data[i];
      }
    }
  };

  const map = (index) => {
    const page = [];
    const row = findData(index);

    row?.data.map((item, key) => {
      const content = [];

      switch (index) {
        case 'row': {
          content.push(
            <div key={key}>
              <Row data={item} />
            </div>,
          );
          break;
        }
        case 'bigRow': {
          content.push(
            <div key={key}>
              <BigRow data={item} />
            </div>,
          );
          break;
        }
        case 'bigBanner': {
          content.push(
            <div key={key}>
              <BigBanner data={item} />
            </div>,
          );
          break;
        }
        case 'smallBanner': {
          content.push(
            <div key={key}>
              <SmallBanner data={item} />
            </div>,
          );
          break;
        }
      }
      page.push(content);
    });
    return page;
  };

  const views = {
    card: <Card data={findData('card')} />,
    apps: <Apps data={findData('apps')} />,
    videoPlayer: <VideoPlayer data={findData('videoPlayer')} />,
    row: (
      <VariableCarousel
        data={{
          content: map('row'),
          width,
          showAll: true,
          title: findData('row')?.title,
        }}
      />
    ),
    bigRow: (
      <VariableCarousel
        data={{
          content: map('bigRow'),
          width,
          showAll: true,
          title: findData('bigRow')?.title,
        }}
      />
    ),
    bigBanner: (
      <VariableCarousel
        data={{
          content: map('bigBanner'),
          width,
          showAll: false,
        }}
      />
    ),
    smallBanner: (
      <VariableCarousel
        data={{
          content: map('smallBanner'),
          width: width - 100,
          titleWidth: width - 40,
          showAll: true,
          title: findData('smallBanner')?.title,
        }}
      />
    ),
    hotCategory: (
      <HotCategory
        data={{
          content: findData('hotCategory')?.data,
          title: findData('hotCategory')?.title,
        }}
      />
    ),
  };

  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
  }, []);

  const isHeaderShown = (value) => {
    setIsShown(value);
  };

  return (
    <>
      <Header title={receiveData.name} header={isShown} icon={false} />
      <Title title={receiveData.name} callBack={isHeaderShown} />
      <main className={styles.main}>
        {receiveData.data.map((item, key) => {
          return <div key={key}>{views[item.name]}</div>;
        })}
      </main>
      <Footer />
    </>
  );
};

export default App;

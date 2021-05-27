import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
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
import Bullets from '../../components/bulletScreen';
import img from '../../asserts/111.png';
import styles from './index.less';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const Today = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [isShown, setIsShown] = useState(false);
  const [width, setWidth] = useState();
  const [date, setDate] = useState('');
  const [week, setWeek] = useState('');

  const showDate = () => {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    return month + '月' + day + '日';
  };

  const showWeek = () => {
    const now = new Date();

    if (now.getDay() == 0) return '星期日';
    if (now.getDay() == 1) return '星期一';
    if (now.getDay() == 2) return '星期二';
    if (now.getDay() == 3) return '星期三';
    if (now.getDay() == 4) return '星期四';
    if (now.getDay() == 5) return '星期五';
    if (now.getDay() == 6) return '星期六';
  };

  const receiveData = {
    name: 'Today',
    data: [
      {
        name: 'card',
        title: '主打推荐',
        subTitle: '带宠闯地牢',
        des: '体验Roguelike 游戏《提灯与地下城》',
        img: pic1,
      },
      {
        name: 'apps',
        title: '专题',
        subTitle: '时下畅销游戏',
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
        ],
      },
      {
        name: 'videoPlayer',
        title: '今日 APP',
        subTitle: 'ASMR到底是什么？',
        des: '用《Glitche》玩转故障艺术',
        play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
      },
      {
        name: 'bullets',
        title: '限时特惠',
        subTitle: '春日游戏限时特惠',
        des: 'zcvzvdv',
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
      },
    ],
  };

  const findData = (name) => {
    for (let i = 0; i < receiveData.data.length; ++i) {
      if (receiveData.data[i].name === name) {
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
    bullets: <Bullets data={findData('bullets')} />,
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
          showAll: true,
          width,
          title: findData('bigRow')?.title,
        }}
      />
    ),
    bigBanner: (
      <VariableCarousel
        data={{
          content: map('bigBanner'),
          showAll: false,
          width,
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
    console.log(data);
    setDate(showDate());
    setWeek(showWeek());
    setWidth(document.documentElement.clientWidth);
  }, []);

  const isHeaderShown = (value) => {
    setIsShown(value);
  };

  return (
    <>
      <Header title={receiveData.name} header={isShown} icon={false} />
      <Title
        date={`${date} ${week}`}
        title={receiveData.name}
        callBack={isHeaderShown}
      />
      <main className={styles.main}>
        {receiveData.data.map((item, key) => {
          return <div key={key}>{views[item.name]}</div>;
        })}
      </main>
      <Footer />
    </>
  );
};

export default Today;

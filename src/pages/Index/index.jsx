import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Card from '../../components/card';
import VideoPlayer from '../../components/videoPlayer';
import Bullets from './component/bulletScreen';
import Apps from '../../components/apps';
import pic1 from '../../asserts/333.png';
import icon from '../../asserts/2.png';
import { queryNb } from '@/utils/api';
import 'antd/dist/antd.css';
import styles from './index.less';

export default function IndexPage() {
  const { data, error, loading } = useRequest(queryNb);
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
    name: 'AAA',
    data: [
      (card: {
        name: 'card',
        title: '主打推荐',
        subTitle: '带宠闯地牢',
        des: '体验Roguelike 游戏《提灯与地下城》',
        img: pic1,
      }),
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

  const views = {
    card: <Card data={findData('card')} />,
    apps: <Apps data={findData('apps')} />,
    videoPlayer: <VideoPlayer data={findData('videoPlayer')} />,
    bullets: <Bullets data={findData('bullets')} />,
  };

  useEffect(() => {
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
      <Footer name={receiveData.name} />
    </>
  );
}

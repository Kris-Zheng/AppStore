import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import VariableCarousel from '../../components/variableCarousel';
import HotCategory from '../../components/hotCategory';
import Row from '../../components/row';
import BigRow from '../../components/bigRow';
import BigBanner from '../../components/bigBanner';
import SmallBanner from '../../components/smallBanner';
import styles from './index.less';

const game = () => {
  const [isShown, setIsShown] = useState(false);
  const [width, setWidth] = useState();
  const [rows, setRows] = useState([]);
  const [bigRows, setBigRows] = useState([]);
  const [bigBanners, setBigBanners] = useState([]);
  const [smallBanners, setSmallBanners] = useState([]);

  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    const page = [];
    for (let i = 0; i < 3; ++i) {
      const content = [];
      for (let i = 0; i < 3; ++i) {
        content.push(<Row key={i} />);
      }
      page.push(content);
    }
    setRows(page);

    const bigRow = [];
    for (let i = 0; i < 3; ++i) {
      const content = [];
      for (let i = 0; i < 2; ++i) {
        content.push(<BigRow key={i} />);
      }
      bigRow.push(content);
    }
    setBigRows(bigRow);

    const bigBanner = [];
    for (let i = 0; i < 5; ++i) {
      bigBanner.push(<BigBanner />);
    }
    setBigBanners(bigBanner);

    const smallBanner = [];
    for (let i = 0; i < 10; ++i) {
      smallBanner.push(<SmallBanner />);
    }
    setSmallBanners(smallBanner);
  }, []);

  const isHeaderShown = (value) => {
    setIsShown(value);
  };

  return (
    <>
      <Header title="游戏" header={isShown} icon={false} />
      <Title title="游戏" callBack={isHeaderShown} />
      <main className={styles.main}>
        <VariableCarousel
          data={bigBanners}
          showAll={false}
          currentWidth={width}
        />
        <VariableCarousel
          title="限时活动特别开启"
          data={rows}
          showAll={true}
          currentWidth={width}
        />
        <VariableCarousel
          title="精选十佳"
          data={smallBanners}
          currentWidth={width - 100}
          titleWidth={width - 30}
        />
        <VariableCarousel
          title="我们都在玩"
          data={rows}
          showAll={true}
          currentWidth={width}
        />
        <HotCategory
          title="热门类别"
          data={[
            { name: '益智解密区区饿饿饿饿版本', icon: 'icon-popcorn-icon' },
            { name: '动作', icon: 'icon-popcorn-icon' },
            { name: '角色扮演', icon: 'icon-popcorn-icon' },
            { name: '策略', icon: 'icon-popcorn-icon' },
            { name: '休闲', icon: 'icon-popcorn-icon' },
            { name: '体育', icon: 'icon-popcorn-icon' },
          ]}
        />
        <VariableCarousel
          title="现可预定"
          data={bigRows}
          showAll={true}
          currentWidth={width}
        />
        <VariableCarousel
          title="今天玩什么"
          data={rows}
          showAll={true}
          currentWidth={width}
        />
      </main>
      <Footer />
    </>
  );
};

export default game;

import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import CenterCarousel from '../../components/variableCarousel';
import Row from '../../components/row';
import BigBanner from '../../components/bigBanner';
import styles from './index.less';

const game = () => {
  const [isShown, setIsShown] = useState(false);
  const [width, setWidth] = useState();
  const [rows, setRows] = useState([]);
  const [bigBanner, setBigBanner] = useState([]);

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

    const big = [];
    for (let i = 0; i < 5; ++i) {
      big.push(<BigBanner />);
    }
    setBigBanner(big)
  }, []);

  const isHeaderShown = (value) => {
    setIsShown(value);
  };

  return (
    <>
      <Header title="App" header={isShown} icon={false} />
      <Title title="App" callBack={isHeaderShown} />
      <main className={styles.main}>
        <CenterCarousel data={bigBanner} showAll={false} currentWidth={width} />
        <CenterCarousel
          title="大家都在用"
          data={rows}
          showAll={true}
          currentWidth={width}
        />
        <CenterCarousel
          title="新鲜App"
          data={rows}
          showAll={true}
          currentWidth={width}
        />
        <CenterCarousel
          title="限时特惠"
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

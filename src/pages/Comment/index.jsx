import React, { useState, useEffect } from 'react';
import Title from '../../components/title';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Stars from '../../components/stars';
import InfiniteScroll from 'react-infinite-scroller';
import Card from './Card';
import { createFromIconfontCN } from '@ant-design/icons';
import styles from './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1930262_qsstjrsl89.js',
});

const Comment = () => {
  const [loading, setLoading] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [feedBack, setFeedBack] = useState([
    {
      key: 0,
      title: '值得一试的游戏',
      date: '3月13日',
      author: '起源一只蝙蝠',
      isExceed: false,
      showAll: true,
      score: [],
      content:
        '不知道王者荣耀官方到底会不会看到。必须取消平衡胜率，取消平衡胜率，取消平衡胜率。匹配到什么样的队友，是玩家的运气。让高端玩家与高端玩家合作对抗，让低端玩家与低端玩家合作对抗。这才是MOBA正解。虽然跟你说叫你跟桑拿房阿鹅鹅发放埃菲尔粉丝该公司公司法人个人过对方共同度过的深入骨髓人发生事故时如果手工达人哥哥阿法法俄法俄啊aefadv。',
    },
    {
      key: 1,
      title: 'nmsl',
      date: '周日',
      author: '起源一只蝙蝠',
      isExceed: false,
      showAll: true,
      score: [],
      content:
        '一开始我是给5星的，毕竟连支线都有语音这点相当不错，问题我提几个， 奖励太少， 骗氪意图太明显， 作为一款卡牌游戏， 卡牌是最基础的， 人物建模还行，但这升星就太坑了 三跪九叩桑拿房科技的双方就开始今年圣诞节发你手机里你都说了可能分开了似的告诉你个双方个会发生工会经费不够好舒服不敢回复都不够好的办法回家搞不懂护肤搞不懂护肤代购',
    },
    {
      key: 2,
      title: '值得一试的游戏',
      date: '周日',
      author: '起源一只蝙蝠',
      isExceed: false,
      showAll: true,
      score: [],
      content:
        '一开始我是给5星的，毕竟连支线都有语音这点相当不错，问题我提几个， 奖励太少， 骗氪意图太明显， 作为一款卡牌游戏， 卡牌是最基础的， 人物建模还行，但这升星就太坑了',
    },
  ]);

  const getApi = () => {
    setLoading(false);
    const res = [
      {
        key: 3,
        title: 'wwww',
        date: '3月13日',
        author: '起源一只蝙蝠',
        isExceed: false,
        showAll: true,
        score: [],
        content:
          '不知道王者荣耀官方到底会不会看到。必须取消平衡胜率，取消平衡胜率，取消平衡胜率。匹配到什么样的队友，是玩家的运气。让高端玩家与高端玩家合作对抗，让低端玩家与低端玩家合作对抗。这才是MOBA正解。虽然跟你说叫你跟桑拿房阿鹅鹅发放埃菲尔粉丝该公司公司法人个人过对方共同度过的深入骨髓人发生事故时如果手工达人哥哥阿法法俄法俄啊是否能接受你放假是那个人就是那个软件内容感觉我如果可能我给你',
      },
      {
        key: 4,
        title: 'cccc',
        date: '周日',
        author: '起源一只蝙蝠',
        isExceed: false,
        showAll: true,
        score: [],
        content:
          '一开始我是给5星的，毕竟连支线都有语音这点相当不错，问题我提几个， 奖励太少， 骗氪意图太明显， 作为一款卡牌游戏， 卡牌是最基础的， 人物建模还行，但这升星就太坑了 三跪九叩桑拿房科技的双方就开始今年圣诞节发你手机里你都说了可能分开了似的告诉你个双方个会发生工会经费不够好舒服不敢回复都不够好的办法回家搞不懂护肤搞不懂护肤代购',
      },
      {
        key: 5,
        title: 'ddd',
        date: '周日',
        author: '起源一只蝙蝠',
        isExceed: false,
        showAll: true,
        score: [],
        content:
          '一开始我是给5星的，毕竟连支线都有语音这点相当不错，问题我提几个， 奖励太少， 骗氪意图太明显， 作为一款卡牌游戏， 卡牌是最基础的， 人物建模还行，但这升星就太坑了',
      },
    ];
    setFeedBack((feedBack) => [...feedBack, ...res]);
  };

  const isHeaderShown = (value) => {
    setIsShown(value);
  };

  useEffect(() => {
    const stars = [];
    for (let i = 0; i < 5; ++i) {
      stars.push(
        <IconFont type="icon-star" style={{ width: '0.625rem' }} key={i} />,
      );
    }

    const data = [...feedBack];
    for (let i = 0; i < feedBack.length; i++) {
      data[i].score = stars;
    }
    setFeedBack(data);
  }, []);

  return (
    <>
      <Header title="评分及评论" header={isShown} icon={true} />
      <Title title="评分及评论" callBack={isHeaderShown} />
      <main className={styles.main}>
        <h2>评分及评论</h2>
        <Stars />
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => getApi()}
          hasMore={loading}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          <Card data={feedBack} />
        </InfiniteScroll>
      </main>
      <Footer />
    </>
  );
};

export default Comment;

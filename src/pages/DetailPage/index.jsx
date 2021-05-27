import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Modal, Rate, Input } from 'antd';
import { Link } from 'umi';
import Slider from 'react-slick';
import Header from './components/header';
import VariableCarousel from '../../components/variableCarousel';
import Rows from '../../components/row';
import Stars from '../../components/stars';
import { createFromIconfontCN } from '@ant-design/icons';
import write from '../../asserts/write.svg';
import icon from '../../asserts/2.png';
import img1 from '../../asserts/12.png';
import styles from './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1930262_qsstjrsl89.js',
});

const { TextArea } = Input;

const DetailPage = () => {
  const [videoPlayer, setVideoPlayer] = useState([]);
  const [score, setScore] = useState([]);
  const [clientWidth, setClientWidth] = useState();
  const [isShown, setIsShown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [y, setY] = useState(200);
  const [stars, setStars] = useState([]);
  const measuredRef = useRef();
  const newFunction = useRef();

  const rows = [];
  for (let i = 0; i < 3; ++i) {
    const row = [];
    for (let i = 0; i < 2; ++i) {
      row.push(<Rows key={i} />);
    }
    rows.push(row);
  }

  const firstCarouselSettings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    centerMode: false,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
  };

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  const sources = {
    play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    format: 'mp4',
  };

  const mockData = {
    title: '抖音',
    subTitle: '记录美好生活',
    icon,
    backgroundImg: img1,
    downloadLink: 'https:www.baidu.com',
    info: {
      score: 4.9,
      stars: 5,
      age: 12,
      rate: '#1',
      category: '策略',
      developer: 'Shanghai',
      size: '3.5',
      unit: 'GB',
      commentNum: '7.5万',
      purchase: true,
    },
    comments: [
      {
        title: '值得一试的游戏',
        date: '3月13日',
        score,
        author: '起源一只蝙蝠',
        content:
          '不知道王者荣耀官方到底会不会看到。必须取消平衡胜率，取消平衡胜率，取消平衡胜率。匹配到什么样的队友，是玩家的运气。让高端玩家与高端玩家合作对抗，让低端玩家与低端玩家合作对抗。这才是MOBA正解。虽然跟你说叫你跟桑拿房阿鹅鹅发放埃菲尔粉丝该公司公司法人个人过对方共同度过的深入骨髓人发生事故时如果手工达人哥哥阿法法俄法俄啊。',
      },
      {
        title: 'nmsl',
        date: '周日',
        score,
        author: '起源一只蝙蝠',
        content:
          '一开始我是给5星的，毕竟连支线都有语音这点相当不错，问题我提几个， 奖励太少， 骗氪意图太明显， 作为一款卡牌游戏， 卡牌是最基础的， 人物建模还行，但这升星就太坑了',
      },
      {
        title: '值得一试的游戏',
        date: '周日',
        score,
        author: '起源一只蝙蝠',
        content:
          '一开始我是给5星的，毕竟连支线都有语音这点相当不错，问题我提几个， 奖励太少， 骗氪意图太明显， 作为一款卡牌游戏， 卡牌是最基础的， 人物建模还行，但这升星就太坑了',
      },
    ],
  };

  const addVideoPlayer = () => {
    for (let i = 0; i < 3; ++i) {
      setVideoPlayer((videoPlayer) => [
        ...videoPlayer,
        <div style={{ width: '32%' }} key={i}>
          <div style={{ marginRight: 10 }}>
            <video
              controls="controls"
              autoPlay={true}
              loop={true}
              muted
              style={{ width: '100%', borderRadius: 15 }}
            >
              <source src={sources.play_url} type="video/mp4" />
            </video>
          </div>
        </div>,
      ]);
    }
  };

  const onScroll = () => {
    setY(measuredRef.current?.getBoundingClientRect()?.top);
  };

  useEffect(() => {
    addVideoPlayer();
    setClientWidth(document.documentElement.clientWidth);
    for (let i = 0; i < 5; ++i) {
      setScore((score) => [
        ...score,
        <IconFont type="icon-star" style={{ width: '0.625rem' }} key={i} />,
      ]);
    }
  }, []);

  useEffect(() => {
    const s = [];
    for (let i = 0; i < mockData.info.stars; ++i) {
      s.push(
        <IconFont type="icon-star" style={{ width: '0.625rem' }} key={i} />,
      );
    }
    setStars(s);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  });

  return (
    <>
      <Header data={y} />
      <img
        src={mockData.backgroundImg}
        style={{ width: '100%', height: '100%' }}
      ></img>
      <div className={styles.detailPage} ref={measuredRef}>
        <Row className={styles.title}>
          <Col span={8}>
            <img
              src={mockData.icon}
              style={{ width: '100%', height: '100%', borderRadius: 25 }}
            />
          </Col>
          <Col
            span={15}
            offset={1}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <div>
              <h2>{mockData.title}</h2>
              <h4>{mockData.subTitle}</h4>
            </div>
            <Button
              shape="round"
              type="primary"
              onClick={() => window.open(mockData.downloadLink)}
            >
              获取
            </Button>
          </Col>
        </Row>
        <Slider {...firstCarouselSettings} className={styles.intro}>
          <div style={{ width: '5%' }}>
            <div
              style={{
                borderTop: '1px solid rgb(211, 211, 211)',
                paddingTop: '1rem',
              }}
            >
              <h5>{`${mockData.info.commentNum}个评分`}</h5>
              <h2>{mockData.info.score}</h2>
              <p>{stars}</p>
            </div>
          </div>
          <div style={{ width: '5%' }}>
            <div
              style={{
                borderTop: '1px solid rgb(211, 211, 211)',
                paddingTop: '1rem',
              }}
            >
              <h5>排行榜</h5>
              <h2>{mockData.info.rate}</h2>
              <p>{mockData.info.category}</p>
            </div>
          </div>
          <div style={{ width: '5%' }}>
            <div
              style={{
                borderTop: '1px solid rgb(211, 211, 211)',
                paddingTop: '1rem',
              }}
            >
              <h5>年龄</h5>
              <h2>{mockData.info.age}</h2>
              <p>岁</p>
            </div>
          </div>
          <div style={{ width: '5%' }}>
            <div
              style={{
                borderTop: '1px solid rgb(211, 211, 211)',
                paddingTop: '1rem',
              }}
            >
              <h5>开发者</h5>
              <h2>
                <IconFont type="icon-caidan07" />
              </h2>
              <p>{mockData.info.developer}</p>
            </div>
          </div>
          <div style={{ width: '5%' }}>
            <div
              style={{
                borderTop: '1px solid rgb(211, 211, 211)',
                paddingTop: '1rem',
              }}
            >
              <h5>大小</h5>
              <h2>{mockData.info.size}</h2>
              <p>{mockData.info.unit}</p>
            </div>
          </div>
        </Slider>
        <Slider {...settings} style={{ marginBottom: '0.625rem' }}>
          {videoPlayer}
        </Slider>
        <div className={styles.comment}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2 style={{ margin: 0 }}>评分及评论</h2>
            <Link to="./comments" style={{ fontSize: 16 }}>
              查看全部
            </Link>
          </div>
          <Stars data={{ score: mockData.info.score }} />
        </div>
        <Slider {...settings} style={{ marginTop: 20 }}>
          {mockData.comments.map((item, key) => {
            return (
              <div style={{ width: `${clientWidth - 30}px` }} key={key}>
                <div className={styles.feedback}>
                  <div>
                    <h4>{item.title}</h4>
                    <span style={{ color: 'rgb(160, 160, 160)' }}>
                      {item.date}
                    </span>
                  </div>
                  <div>
                    <i style={{ color: 'rgb(255, 136, 0)' }}>{item.score}</i>
                    <span style={{ color: 'rgb(160, 160, 160)' }}>
                      {item.author}
                    </span>
                  </div>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <span
          style={{ color: '#1890ff', display: 'flex', margin: '10px 0' }}
          onClick={() => setIsModalVisible(true)}
        >
          <img src={write} alt="icon" />
          撰写评论
        </span>
        <div className={styles.newFunction}>
          <h2>新功能</h2>
          <h4>版本1.0637</h4>
          <h4 style={{ float: 'right' }}>5天前</h4>
          <div
            style={
              isShown
                ? { height: 'auto' }
                : { maxHeight: '4.6rem', position: 'relative' }
            }
            ref={newFunction}
          >
            <p
              style={
                isShown
                  ? { fontSize: 16 }
                  : {
                      fontSize: 16,
                      lineHeight: '1.6rem',
                      maxHeight: '4.8rem',
                      overflow: 'hidden',
                      margin: 0,
                    }
              }
            >
              1.UI与画质体验全面进化，整体视效大幅提升，操作顺滑如行云流水，队伍-侠客等界面发送到你房间淑女范十年高考阿福难道你房间淑女范级考试呢电饭锅蛋糕
            </p>
            <span
              style={{
                //取反
                display: isShown ? 'none' : 'inline-block',
              }}
              onClick={() => setIsShown(true)}
            >
              更多
            </span>
          </div>
        </div>
        <div className={styles.privacy}>
          <h2>App隐私</h2>
          <p>
            开发者Tencent Mobile
            Games已表明该App的隐私惯例可能包括了下述的数据处理。有关更多信息,请参阅开发者隐私政策
          </p>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.info}>
          <h2 style={{ margin: 0 }}>信息</h2>
          <Row className={styles.infoContent}>
            <Col span={5} style={{ color: 'gray' }}>
              供应商
            </Col>
            <Col
              span={19}
              style={{
                textAlign: 'right',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {mockData.info.developer}
            </Col>
          </Row>
          <Row className={styles.infoContent}>
            <Col span={5} style={{ color: 'gray' }}>
              大小
            </Col>
            <Col
              span={19}
              style={{
                textAlign: 'right',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {mockData.info.size}
            </Col>
          </Row>
          <Row className={styles.infoContent}>
            <Col span={5} style={{ color: 'gray' }}>
              类别
            </Col>
            <Col
              span={19}
              style={{
                textAlign: 'right',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {mockData.info.category}
            </Col>
          </Row>
          <Row className={styles.infoContent}>
            <Col span={5} style={{ color: 'gray' }}>
              兼容性
            </Col>
            <Col
              span={19}
              style={{
                textAlign: 'right',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {mockData.info.developer}
            </Col>
          </Row>
          <Row className={styles.infoContent}>
            <Col span={5} style={{ color: 'gray' }}>
              年龄分级
            </Col>
            <Col
              span={19}
              style={{
                textAlign: 'right',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {`${mockData.info.age}+`}
            </Col>
          </Row>
          <Row className={styles.infoContent}>
            <Col span={5} style={{ color: 'gray' }}>
              App内购买
            </Col>
            <Col
              span={19}
              style={{
                textAlign: 'right',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {mockData.info.purchase ? '是' : '否'}
            </Col>
          </Row>
          <Row className={styles.infoContent}>
            <Col span={5} style={{ color: 'gray' }}>
              版权
            </Col>
            <Col
              span={19}
              style={{
                textAlign: 'right',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {`@ ${mockData.info.developer}`}
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ paddingLeft: '1rem', backgroundColor: '#ebebeb' }}>
        <VariableCarousel
          title="您可能还喜欢"
          data={rows}
          currentWidth={clientWidth}
        />
      </div>
      <Modal
        title="撰写评论"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        style={{ textAlign: 'center' }}
        bodyStyle={{ padding: 0 }}
        okText="发送"
        cancelText="取消"
        okButtonProps={{ disabled: title === '' ? true : false }}
      >
        <Rate style={{ color: 'rgb(24, 144, 255)' }} />
        <span style={{ display: 'block', fontSize: 'smaller', color: 'gray' }}>
          轻点星形来评分
        </span>
        <Input
          style={{ width: '95%', borderTop: '1px solid rgb(211, 211, 211)' }}
          bordered={false}
          placeholder="标题"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></Input>
        <TextArea
          autoSize={{ minRows: 10, maxRows: 20 }}
          style={{ width: '95%' }}
        ></TextArea>
      </Modal>
    </>
  );
};

export default DetailPage;

import React from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { Link } from 'umi';
import styles from './index.less';

const centerCarousel = (props) => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    speed: 300,
  };

  const slide = props.data.content?.map((item, key) => (
    <div style={{ width: `${props.data?.width - 30}px` }} key={key}>
      <div style={{ marginRight: 10 }} className={styles.slider}>
        {item}
      </div>
    </div>
  ));

  return (
    <div className={styles.variableCarousel}>
      <div
        className={styles.title}
        style={{
          width: props.data.titleWidth
            ? props.data.titleWidth
            : `${props.data?.width - 40}px`,
        }}
      >
        <h2 style={{ margin: 0 }}>{props.data?.title}</h2>
        <Link
          to="./list"
          style={{
            fontSize: 16,
            display: props.data?.showAll ? 'block' : 'none',
          }}
        >
          查看全部
        </Link>
      </div>
      <Slider {...settings}>{slide}</Slider>
    </div>
  );
};

export default centerCarousel;

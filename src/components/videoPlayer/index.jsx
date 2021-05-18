import React from 'react';
import { history } from 'umi';
import styles from './index.less';

const videoPlayer = (props) => {
  return (
    <div className={styles.player} onClick={() => history.push('./videoPage')}>
      <video controls="controls" loop={true}>
        <source src={props.data.play_url} type="video/mp4" />
      </video>
      <div className={styles.titles}>
        <h4>{props.data.title}</h4>
        <h1>{props.data.subTitle}</h1>
        <h3>{props.data.des}</h3>
      </div>
    </div>
  );
};

export default videoPlayer;

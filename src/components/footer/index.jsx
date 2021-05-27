import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { createFromIconfontCN } from '@ant-design/icons';
import styles from './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1930262_hyt1mrxq96.js',
});

const menu = [
  {
    text: '首页',
    to: '/',
    icon: 'icon-today',
  },
  {
    text: '游戏',
    to: '/game',
    icon: 'icon-rocket',
  },
  {
    text: 'App',
    to: '/app',
    icon: 'icon-ios-apps',
  },
  {
    text: '搜索',
    to: '/search',
    icon: 'icon-Search',
  },
];

const sideBar = () => {
  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
  });

  const sideBar = menu.map((item, key) => (
    <div
      onClick={() => {
        history.push(item.to);
      }}
      key={key}
      style={{
        color: currentPath === item.to ? '#1890ff' : 'gray',
        width: '25%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
      }}
    >
      <span>{item.text}</span>
      <IconFont type={item.icon} style={{ fontSize: 30 }} />
    </div>
  ));

  return (
    <footer>
      <div className={styles.sideBar}>{sideBar}</div>
      <div style={{ height: 70, width: '100%' }} />
    </footer>
  );
};

export default sideBar;

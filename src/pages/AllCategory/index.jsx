import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { createFromIconfontCN } from '@ant-design/icons';
import styles from './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1930262_qsstjrsl89.js',
});

const AllCategory = () => {
  const [rows, setRows] = useState([]);
  const row = (
    <div className={styles.content}>
      <IconFont type="icon-popcorn-icon" style={{ fontSize: 20 }} />
      <div className={styles.item}>娱乐</div>
    </div>
  );

  useEffect(() => {
    const content = [];
    for (let i = 0; i < 20; ++i) {
      content.push(row);
    }
    setRows(content);
  }, []);

  return (
    <>
      <Header title="类别" header={true} icon={true} />
      <main className={styles.main}>
        {rows.map((item, key) => (
          <div key={key} onClick={()=>history.push('./game')}>{item}</div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default AllCategory;

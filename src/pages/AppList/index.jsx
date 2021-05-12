import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BigRow from '../../components/bigRow';
import { history } from 'umi';
import styles from './index.less';

const AppList = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const data = [];
    for (let i = 0; i < 9; ++i) {
      data.push(<BigRow />);
    }
    setRows(data);
  }, []);

  return (
    <>
      <Header title="我们都在玩" header={true} icon={true} />
      <main className={styles.main}>
        {rows.map((item, key) => (
          <div key={key} onClick={() => history.push('./details2')}>
            {item}
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default AppList;

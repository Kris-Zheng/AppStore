import React, { useEffect, useCallback, useState } from 'react';
import styles from './index.less';

const feedBack = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...props.data]);
  }, [props.data]);

  const measuredRef = useCallback(
    (node) => {
      const a = props.data;
      if (node?.scrollHeight > node?.clientHeight) {
        a[node.id].isExceed = true;
        setData(a);
      }
    },
    [props.data],
  );

  const expandContent = (i) => {
    const a = [...data];
    a[i].isExceed = false;
    a[i].showAll = false;
    setData(a);
  };

  return (
    <>
      {data.map((item, key) => {
        return (
          <div key={key} className={styles.feedBack}>
            <h4 style={{ display: 'inline' }}>{item.title}</h4>
            <h4
              style={{
                display: 'inline',
                float: 'right',
                color: 'rgb(160, 160, 160)',
              }}
            >
              {item.date}
            </h4>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <i style={{ color: 'rgb(255, 136, 0)' }}>{item.score}</i>
              <div style={{ color: 'rgb(160, 160, 160)' }}>{item.author}</div>
            </div>
            <div
              style={
                item.showAll
                  ? {
                      height: '9.6rem',
                      position: 'relative',
                      overflow: 'hidden',
                    }
                  : { position: 'relative' }
              }
              ref={measuredRef}
              id={item.key}
              className={styles.content}
            >
              <p style={{ margin: 0 }}>{item.content}</p>
              <span
                style={{ display: item.isExceed ? 'inline-block' : 'none' }}
                onClick={() => expandContent(item.key)}
              >
                更多
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default feedBack;

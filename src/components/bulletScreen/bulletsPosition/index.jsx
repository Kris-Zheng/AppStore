import React from 'react';
import styles from './index.less';

class Bullets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //存放弹幕
      bulletChatList: [],
    };
  }

  componentDidMount() {
    //给弹幕初始位置
    let data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      data[i].left = i * 100;
    }
    this.setState({ bulletChatList: data });

    //控制弹幕滚动速度
    this.interval = setInterval(() => {
      let data = this.state.bulletChatList;
      for (let i = 0; i < data.length; ++i) {
        data[i].left -= 1;
        // 每当一个弹幕超出可视区域
        if (data[i].left === -100) {
          data[i].left = 400;
        }
      }
      this.setState({ bulletChatList: data });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={styles.screen}>
        {this.state.bulletChatList.map((item, index) => {
          return (
            <img
              key={index}
              style={{
                left: `${item.left}px`,
              }}
              src={item.icon}
            ></img>
          );
        })}
      </div>
    );
  }
}

export default Bullets;

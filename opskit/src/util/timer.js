import React from 'react';

class Timer extends React.Component {
  state = {
    seconds: 0
  }
  tick = () => {
    const { seconds } = this.state;
    console.log(this.state.seconds);
    this.setState({
      seconds: seconds + 1
    });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return null;
  }
}
export default Timer;

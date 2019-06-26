import React from 'react';

class TimerMinSec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            seconds: this.props.sec
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }
    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
            this.props.timeIsOut();
        }
    }
    stopTimer = () => {
        clearInterval(this.timer);
        this.timer = null;
    };
    componentWillUnmount () {
        this.stopTimer();
    }
    render() {
        const hours = this.state.time.h < 10 ? '0' + this.state.time.h : this.state.time.h;
        const min = this.state.time.m < 10 ? '0' + this.state.time.m : this.state.time.m;
        const sec = this.state.time.s < 10 ? '0' + this.state.time.s : this.state.time.s;
        if(!this.props.timerRun){
            clearInterval(this.timer);
        }
        return(
            <div>
                {hours} : {min} : {sec}
            </div>
        );
    }
}

export default TimerMinSec;
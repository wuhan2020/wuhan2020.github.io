import React from 'react';

import './kanbanTimer.scss';

class KanbanTimer extends React.Component {
    constructor(props) {
        super(props);
        this.getTimeDiffFrom = this.getTimeDiffFrom.bind(this);
        this.state = {
            diff: this.getTimeDiffFrom(this.props.from),
            interval: null,
        };
    }

    getTimeDiffFrom (start) {
        let diffMs = new Date().getTime() - new Date(start).getTime();
        let diminution = 0;
        const [dayMs, hourMs, minuteMs, secondMs] = [1000 * 60 * 60 * 24, 1000 * 60 * 60, 1000 * 60, 1000 ];
        let d = Math.floor(diffMs / dayMs);
        diminution += d * dayMs;
        let h = Math.floor((diffMs - diminution) / hourMs);
        diminution += h * hourMs;
        let m = Math.floor((diffMs - diminution) / minuteMs);
        diminution += m * minuteMs;
        let s = Math.floor((diffMs - diminution) / secondMs);
    
        return {d, h, m, s};
    };
    
    componentDidMount() {
        const { from } = this.props;
        const interval = setInterval(() => {
                const diff = this.getTimeDiffFrom(from);
                this.setState({ diff });
        }, 1000); 

        this.setState( {interval} );   
    }

    componentWillUnmount() {
        const { interval } = this.state;
        clearInterval(interval);
    }

    render() {
        const { title, timeSlots } = this.props;
        const { diff } = this.state;
        return (
            <div className="timer-wrapper">
                <div className="timer-title">
                    {title}
                </div>
                <div className="timer-board">
                    {
                        timeSlots.map( ({unit, text} = {}, idx) => {
                            return (
                                <div className="time-slot" key={idx}>
                                    <span className="time">{diff[unit]}</span>
                                    <span className="text">{text}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default KanbanTimer;

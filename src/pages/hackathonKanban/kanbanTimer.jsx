import React from 'react';
import PropTypes from 'prop-types';

import './kanbanTimer.scss';

const propTypes = {
    title: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired, // time string
    timeSlots: PropTypes.array.isRequired, // [{ unit: 'd', text: '天'}， { unit: 'h', text: '时'}]
};

const getTimeDiffFrom = (start) => {
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

const KanbanTimer = (props) => {
    const { title, from, timeSlots } = props;
    const timeDiff = getTimeDiffFrom(from);
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
                                <span className="time">{timeDiff[unit]}</span>
                                <span className="text">{text}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
       
    );
};

KanbanTimer.propTypes = propTypes;

export default KanbanTimer
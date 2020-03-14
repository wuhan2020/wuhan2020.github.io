/*
 * @Description: 
 * @Author: wonder
 * @Date: 2020-03-07 20:11:42
 * @LastEditors: wonder
 * @LastEditTime: 2020-03-07 23:41:03
 */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './hackathonProgress.scss'
import VerticalProgress from './components/VerticalProgress';

function getDates(timeStart, timeEnd) {
    const startMoment = moment(timeStart)
    const diffDay = moment(timeEnd).diff(startMoment, 'days') + 1;
    const today = moment().format('YYYY-MM-DD');
    const nowDiffDay = moment(timeEnd).diff(today, 'days');

    return {
        dates: Array.from({ length: diffDay }).map((_, key) => startMoment.add(key ? 1 : 0, 'days').format('MM-DD')),
        num: diffDay,
        percent: Math.min( (diffDay - nowDiffDay) / diffDay, 1)
    }
}

const HackathonProgress = ({ title, timeStart, timeEnd, mileStones }) => {
    const { dates, num, percent } = getDates(timeStart, timeEnd);
    return <div className="hackathon_progress_wrapper">
        <div className="progress_title">
            {title}
        </div>
        <div className="progress_date_list">
            <div className="date_list">
                {
                    dates.map((date) => {
                        const eventObj = mileStones.find(obj => obj.time === date)
                        return <div key={`date_${date}`} className="date_item">
                            <span>{date}</span>
                            <span>{eventObj ? eventObj.event : ''}</span>
                        </div>
                    })
                }
            </div>
            <div className="vertical_progress" style={{ height: num * (21 + 8) }}>
                <VerticalProgress percent={percent} />
            </div>
        </div>
    </div>
}



export default HackathonProgress;

HackathonProgress.propTypes = {
    timeStart: PropTypes.string,
    timeEnd: PropTypes.string,
    title: PropTypes.string,
    mileStones: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string,
        event: PropTypes.string,
        color: PropTypes.string
    }))
};

/*
 * @Description: 
 * @Author: wonder
 * @Date: 2020-03-07 21:52:52
 * @LastEditors: wonder
 * @LastEditTime: 2020-03-07 23:50:31
 */
import React from "react";
import "./index.scss";

const Progress = ({ percent, total, progress }) => {
    const mPercent = percent || progress / total;

    return (
        <div className="progress_wrapper">
            <div className="progress_background" />
            <div className="progress" style={{ height: `calc(${mPercent * 100}% - 8px)` }}>
                <div className="progress_bar" />
                <div className="progress_ball" />
            </div>
        </div>
    );
};

export default Progress;

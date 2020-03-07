/*
 * @Description: 
 * @Author: wonder
 * @Date: 2020-03-07 21:52:52
 * @LastEditors: wonder
 * @LastEditTime: 2020-03-07 23:50:31
 */
import React from "react";
import "./index.scss";

const Progress = ({ precent, total, progress }) => {
    const mPrecent = precent || progress / total;

    return (
        <div className="progress_wrapper">
            <div className="progress_background" />
            <div className="progress" style={{ height: `calc(${mPrecent * 100}% - 8px)` }}>
                <div className="progress_bar" />
                <div className="progress_ball" />
            </div>
        </div>
    );
};

export default Progress;

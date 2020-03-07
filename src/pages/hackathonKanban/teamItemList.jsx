import React from 'react';
import TeamItem from './teamItem';
import PropTypes from 'prop-types';

import './teamItemList.scss';

const propTypes = {
    viewport: PropTypes.string.isRequired,
    teamListData: PropTypes.array.isRequired,
};

const headerLangMap = {
    name: '项目名称',
    leader: '队长姓名', 
    members: '队员姓名',
    tutor: '导师',
    abstract: '项目简介',
};

const TeamItemList = (props) => {
    const { viewport, teamListData: { tableHeader, list } } = props;
    return (
        <div className="team-item-list">
            {
                viewport !== 'mobile' && 
                <div className="list-table-header">
                    {tableHeader.map( (item, idx) => <span className={item} key={idx}>{headerLangMap[item]}</span>)}
                </div>
            }
            
            { list.map( (item, idx) => <TeamItem {...{viewport, tableHeader, itemData: item}} key={idx} /> )}
        </div>
    );
};

TeamItemList.propTypes = propTypes;

export default TeamItemList;
import React from 'react';
import TeamItem from './teamItem';
import PropTypes from 'prop-types';

import './teamItemList.scss';

const propTypes = {
    viewport: PropTypes.string.isRequired,
    tableHeader: PropTypes.array.isRequired,
    teamListData: PropTypes.array.isRequired,
    awardsList: PropTypes.array.isRequired,
};

const headerLangMap = {
    subject: '项目名称',
    leader: '队长姓名', 
    members: '队员姓名',
    tutor: '导师',
    abstract: '项目简介',
};

const TeamItemList = (props) => {
    const { viewport, teamListData, tableHeader, awardsList } = props;
    return (
        <div className="team-item-list">
            {
                viewport !== 'mobile' && 
                <div className="list-table-header">
                    {tableHeader.map( (item, idx) => <span className={item} key={idx}>{headerLangMap[item]}</span>)}
                </div>
            }
            
            { teamListData.map((item, idx) => {
                    const teamItemData = {viewport, tableHeader, itemData: item};
                    const award = awardsList.filter(award => award.id === item.id);
                    if (award.length > 0) {
                        teamItemData.award = award[0];
                    }
                    return (<TeamItem {...teamItemData} key={idx} />);
                })
            }
        </div>
    );
};

TeamItemList.propTypes = propTypes;

export default TeamItemList;
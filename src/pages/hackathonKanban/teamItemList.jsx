import React from 'react';
import TeamItem from './teamItem';
import PropTypes from 'prop-types';

import './teamItemList.scss';

const propTypes = {
    viewport: PropTypes.string.isRequired,
    tableHeader: PropTypes.array.isRequired,
    teamListData: PropTypes.array.isRequired,
    awardsData: PropTypes.object.isRequired,
};

const headerLangMap = {
    subject: '项目名称',
    leader: '队长姓名', 
    members: '队员姓名',
    tutor: '导师',
    abstract: '项目简介',
};

const TeamItemList = (props) => {
    const { viewport, teamListData, tableHeader, awardsData: {awardList, awardIcons} } = props;
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
                    const awardItem = awardList.filter(award => award.ids.includes(item.id));
                    if (awardItem.length > 0) {
                        const {title, iconKey} = awardItem[0];
                        teamItemData.award = {title, icon: awardIcons[iconKey]};
                    }
                    return (<TeamItem {...teamItemData} key={idx} />);
                })
            }
        </div>
    );
};

TeamItemList.propTypes = propTypes;

export default TeamItemList;
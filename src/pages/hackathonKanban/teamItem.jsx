import React from 'react';
import PropTypes from 'prop-types';

import './teamItem.scss';

const propTypes = {
    viewport: PropTypes.string.isRequired,
    tableHeader: PropTypes.array.isRequired,
    itemData: PropTypes.object.isRequired,
};

const headerLangMap = {
    name: '项目名称',
    leader: '队长姓名', 
    members: '队员姓名',
    tutor: '导师',
    abstract: '项目简介',
};

const TeamItem = (props) => {
    const { viewport, tableHeader, itemData } = props;
    const headerClone = [...tableHeader];
    headerClone.pop();

    return (
        <div className="team-item-wrapper">
            { viewport === 'mobile' ? (
                <div className="team-info">
                    <div className="team-info-general">
                    {   headerClone.map( (item, idx) => {
                            return (
                                <div className={`team-item ${item}`} key={idx} >
                                    { item !== 'name' && 
                                        <span className="header">{headerLangMap[item]}</span>
                                    }
                                    <span className="content">{itemData[item]}</span>
                                </div>
                            );
                        })
                    }
                    </div>
                
                    <div className='team-item abstract mobile'>
                        <span className="header">{headerLangMap.abstract}</span>
                        <span className="content">{itemData.abstract}</span>
                    </div>
             </div>
            ) : (
                tableHeader.map( (item, idx) => {
                    return (
                        <div className={`team-item ${item}`} key={idx} >
                            <span className="content">{itemData[item]}</span>
                        </div>
                    );
                })
            )}
        </div> 
    );
};

TeamItem.propTypes = propTypes;

export default TeamItem;
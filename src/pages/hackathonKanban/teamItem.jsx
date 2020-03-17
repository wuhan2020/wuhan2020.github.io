import React, { useState } from 'react';

import './teamItem.scss';

const headerLangMap = {
    subject: '项目名称',
    leader: '队长姓名', 
    members: '队员姓名',
    tutor: '导师',
    abstract: '项目简介',
};

const TeamItem = (props) => {
    const [isAbstractShown, setIsAbstractShown] = useState(false);
    const { viewport, tableHeader, itemData, award=null } = props;
    const headerClone = [...tableHeader];
    headerClone.pop();

    const handleOnMouseOver = () => {
        setIsAbstractShown(true);
    };

    const handleOnMouseLeave = () => {
        setIsAbstractShown(false);
    };

    return (
        <div className="team-item-wrapper">
            { viewport === 'mobile' ? (
                <div className="team-info">
                     {award && 
                        <div className='award'>
                            {award.level}
                        </div>
                    }
                    <div className={`team-info-general ${isAbstractShown ? 'abstract-shown': ''}`} onMouseLeave={handleOnMouseLeave}>
                        {headerClone.map( (item, idx) => {
                            return (
                                <div className={`team-item ${item}`} key={idx}>
                                    { item !== 'subject' && 
                                        <span className="header">{headerLangMap[item]}</span>
                                    }
                                    <span className="content">
                                        { Array.isArray(itemData[item]) ?
                                            itemData[item].map( (member, idx) => 
                                                <span className="member" key={idx}>{member}</span> 
                                            ) :
                                            `${item === 'subject' ? `${itemData['id']}. ` : ''}${itemData[item]}`
                                        }
                                    </span>
                                </div>
                            );
                        })}
                        <div className='team-item abstract-header mobile'>
                            <span   
                                className="header" 
                                onMouseEnter={handleOnMouseOver}> 
                            {headerLangMap.abstract}
                            </span>
                        </div>
                        {isAbstractShown &&
                            <div className='team-item abstract-content mobile'>
                                <span className="content">{itemData.abstract}</span>
                            </div>
                        }
                    </div>
             </div>
            ) : (
                tableHeader.map( (item, idx) => {
                    return (
                        <div className={`team-item ${item}`} key={idx} >
                            <span className="content">{`${item === 'subject' ? `${itemData['id']}. ` : ''}${itemData[item]}`}</span>
                        </div>
                    );
                })
            )}
        </div> 
    );
};


export default TeamItem;

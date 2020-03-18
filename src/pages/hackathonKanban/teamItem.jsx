import React, { useState } from 'react';

import './teamItem.scss';

const headerTextMap = {
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

    const getDynamicClassName = () => `${isAbstractShown ? 'abstract-shown': ''} ${award ? 'show-award' : ''}`;

    return (
        <div className="team-item-wrapper">
            { viewport === 'mobile' ? (
                <div className={`team-info-general ${getDynamicClassName()}`}>
                    {award && 
                        <div className='team-item award-badge'>
                            <img src={award.icon} aria-label={award.title} alt={award.title} />
                            {award.title}
                        </div>
                    }
                    {headerClone.map( (item, idx) => {
                        return (
                            <div className={`team-item ${item}`} key={idx}>
                                { item !== 'subject' && 
                                    <span className="header">{headerTextMap[item]}</span>
                                }
                                <span className="content">
                                    { Array.isArray(itemData[item]) ?
                                        itemData[item].map( (member, idx) => 
                                            <span className="member" key={idx}>{member}</span> 
                                        ) :
                                        `${item === 'subject' ? `${itemData['id']}. ` : ''}${itemData[item]||'-'}`
                                    }
                                </span>
                            </div>
                        );
                    })}
                    <div className='team-item abstract-header mobile'>
                        <span   
                            className="header" 
                            onClick={() => setIsAbstractShown(true)}
                            onMouseEnter={() => setIsAbstractShown(true)}>
                        {headerTextMap.abstract}
                        </span>
                    </div>
                    {isAbstractShown &&
                        <div 
                            className='team-item abstract-content mobile' 
                            onClick={() => setIsAbstractShown(false)}
                            onMouseLeave={() => setIsAbstractShown(false)}>
                            <span className="content">{itemData.abstract}</span>
                        </div>
                    }
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

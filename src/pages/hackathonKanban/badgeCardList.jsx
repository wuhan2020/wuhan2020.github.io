import React from 'react';
import BadgeCardItem from './badgeCardItem';
import PropTypes from 'prop-types';

import './badgeCardList.scss';

const propTypes = {
    itemList: PropTypes.array.isRequired,
};

const BadgeCardList = (props) => {
    const { itemList } = props;
    return (
        <div className="badge-card-list">
            {itemList.map( (item, idx) => <BadgeCardItem {...item} key={idx} /> )}
        </div>
    );
};

BadgeCardList.propTypes = propTypes;

export default BadgeCardList;
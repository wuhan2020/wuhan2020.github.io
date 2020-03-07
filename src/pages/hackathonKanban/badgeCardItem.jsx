import React from 'react';
import PropTypes from 'prop-types';

import './badgeCardItem.scss';

const propTypes = {
    quantity: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    itemStyle: PropTypes.object.isRequired
};
const BadgeCardItem = (props) => {
    const { quantity, title, icon, bgColor, itemStyle } = props;
    return (
        <div className="badge-card-item" style={{backgroundColor: bgColor}}>
            <p className="quantity">{quantity}</p>
            <p className="title">{title}</p>
            <img src={icon} alt=""/>
        </div>
    );
};

BadgeCardItem.prototype = propTypes;

export default BadgeCardItem;

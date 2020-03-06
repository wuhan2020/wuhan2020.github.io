import React from 'react';
import PropTypes from 'prop-types';

import './badgeCardItem.scss';

const propTypes = {
    quantity: PropTypes.string.isRequired,
    itemStyle: PropTypes.object.isRequired,
};
const BadgeCardItem = (props) => {
    const { quantity, itemStyle } = props;
    return (
        <div className="badge-card-item" style={itemStyle}>
            <span className="quantity">{quantity}</span>
        </div>
    );
};

BadgeCardItem.prototype = propTypes;

export default BadgeCardItem;
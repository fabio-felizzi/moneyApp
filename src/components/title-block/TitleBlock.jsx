import React from 'react';
import PropTypes from 'prop-types';

import './TitleBlock.css';

export const TitleBlock = ({
    title,
    subtitle,
    children,
    backgroundColor,
}) => (
    <div styleName={`title-block ${backgroundColor}`}>
        <div styleName="content">
            <h1 styleName="title">
                {title}
            </h1>
            {subtitle && (
                <h2 styleName="subtitle">
                    {subtitle}
                </h2>
            )}
            {children}
        </div>
    </div>
);

TitleBlock.defaultProps = {
    subtitle: '',
    backgroundColor: 'white',
    children: null,
};

TitleBlock.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    backgroundColor: PropTypes.oneOf(['black', 'white']),
    children: PropTypes.element,
};

export default TitleBlock;

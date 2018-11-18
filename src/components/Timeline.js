import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const Timeline = ({
  event
}) => {
  return (
    <div data-timeline-id={ event.minute } className="timeline__group">
      <div className="timeline__box">
        <div className="timeline__time">
          <span className="timeline__minute">{ event.minute }</span>       
        </div>
        <div className="timeline__event">
          <div className="timeline__content">
            <p>{ event.commentary }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Set propTypes for typechecking on 
 * Timeline component
 * @type {Object}
 */
Timeline.propTypes = {
  event: PropTypes.shape(),
};

export default Timeline;

import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const Timeline = ({
  event
}) => {
	return (
    <Fragment>
  		<p>{ event.minute }</p>
      <p>{ event.commentary }</p>
    </Fragment>
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

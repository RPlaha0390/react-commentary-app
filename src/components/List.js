import React from 'react'
import PropTypes from 'prop-types';

const List = ({
  keyMoment,
  onClick
}) => {
	return (
		<div className="list__group">
      <li className="list__item">
      	<span>{ keyMoment.minute }</span> 
      	<span>{ keyMoment.event }</span>
      </li>
    </div>
	);
}

/**
 * Set propTypes for typechecking on 
 * List component
 * @type {Object}
 */
List.propTypes = {
  keyMoment: PropTypes.shape(),
  onClick: PropTypes.func.isRequired,
};


export default List;
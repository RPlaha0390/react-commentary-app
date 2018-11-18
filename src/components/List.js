import React from 'react'
import PropTypes from 'prop-types';

const List = ({
  keyMoment,
  onClick
}) => {
  return (
    <div data-key-moments-id={ keyMoment.minute } className="list__group" onClick={ onClick }>
      <li className="list__item">
        <span>{ keyMoment.minute }</span> 
        <span className={'icon ' + keyMoment.event.toLowerCase() }>{ keyMoment.event }</span>
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

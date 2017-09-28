import React from 'react';
import { IndexLink, Link } from 'react-router';

import Button from './button'

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filterBy: React.PropTypes.string,
  onClickArchiveAll: React.PropTypes.func,
  onClickFilter: React.PropTypes.func,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filterBy: '',
  onClickArchiveAll: noop,
  onClickFilter: noop,
};

/**
 * Navbar component
 * @returns {ReactElement}
 */
const Navbar = ({ filterBy, onClickArchiveAll, onClickFilter }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'navbar'

  return (
    <div className={baseCls}>
      <IndexLink
        to="/"
        activeClassName={`${baseCls}__item--active`}
        className={`${baseCls}__item`}
        onClick={() => onClickFilter('')}
      >
        All
      </IndexLink>

      <Link
        to="/active"
        activeClassName={`${baseCls}__item--active`}
        className={`${baseCls}__item`}
        onClick={() => onClickFilter('active')}
      >
        Active
      </Link>

      <Link
        to="/completed"
        activeClassName={`${baseCls}__item--active`}
        className={`${baseCls}__item`}
        onClick={() => onClickFilter('completed')}
      >
        Completed
      </Link>

      <Link
        to="/archived"
        activeClassName={`${baseCls}__item--active`}
        className={`${baseCls}__item`}
        onClick={() => onClickFilter('archived')}
      >
        Archived
      </Link>

      <Button
        buttonClass="button--archive-all"
        onClick={onClickArchiveAll}
        text="Archive all completed"
      />
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;

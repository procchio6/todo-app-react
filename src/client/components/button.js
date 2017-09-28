import React from 'react';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
  buttonClass: React.PropTypes.string
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  onClick: noop,
  text: '',
  buttonClass: ''
};

/**
 * Button component
 * @returns {ReactElement}
 */
const Button = ({ text, onClick, buttonClass }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'button ' + buttonClass;

  return (
    <button className={baseCls} onClick={onClick}>
      {text}
    </button>
  )
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

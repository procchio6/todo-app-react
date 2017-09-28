import React from 'react';

import Button from './button';
import TodoLink from './todo-link';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filtered: React.PropTypes.bool,
  onClickDelete: React.PropTypes.func,
  onClickTodo: React.PropTypes.func,
  status: React.PropTypes.string,
  text: React.PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filtered: false,
  onClickDelete: noop,
  onClickTodo: noop,
  status: '',
  text: '',
};

/**
 * Todo component
 * @returns {ReactElement}
 */
const Todo = ({ archive, filtered, onClickArchive, onClickDelete, onClickTodo, status, text }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo--status-complete' : '')
    + (filtered ? ' todo--filtered' : '');

  return (
    <li className={todoCls}>
      <input
        type="checkbox"
        checked={status === 'complete'}
        className={baseCls + '__checkbox'}
        onChange={onClickTodo}
      />

      <TodoLink text={text} onClick={onClickTodo} />
      {
        (status === 'complete' && archive === false) &&
        <Button buttonClass='button--archive' text="Archive" onClick={onClickArchive} />
      }
      <Button buttonClass='button--delete' text="X" onClick={onClickDelete} />
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;

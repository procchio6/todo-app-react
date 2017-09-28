import React from 'react';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  onClickCompleteAll: React.PropTypes.func,
  todos: React.PropTypes.arrayOf(React.PropTypes.object),
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  onClickCompleteAll: noop,
  todos: [],
};

/**
 * TodosCounter component
 * @returns {ReactElement}
 */
const TodosCounter = ({ onClickCompleteAll, todos }) => {

  const activeTaskCount = todos.filter(todo => todo.status === 'active').length;

  /**
   * Base CSS class
   */
  const baseCls = 'todos-counter';

  return (
    <div className={baseCls}>
      <span className={baseCls+'__tasks-remaining'}>
        {`${activeTaskCount} tasks remaining`}
      </span>
      <span className={baseCls+'__complete-all'} onClick={onClickCompleteAll}>
        Complete All
      </span>
    </div>
  );
}

TodosCounter.propTypes = propTypes;
TodosCounter.defaultProps = defaultProps;

export default TodosCounter;

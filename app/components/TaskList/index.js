import React from 'react';
import PropTypes from 'prop-types';
import { TaskWrapper, TaskRow } from './styled';
/* eslint-disable react/prefer-stateless-function */
class TaskList extends React.PureComponent {
  render() {
    const { tasks } = this.props;
    return tasks.map(({ title, description, priority }) => (
      <TaskWrapper key={title}>
        <TaskRow>
          <p>Title:</p>
          <p>{title}</p>
        </TaskRow>
        <TaskRow>
          <p>Description:</p>
          <p>{description}</p>
        </TaskRow>
        <TaskRow>
          <p>Priority:</p>
          <p>{priority}</p>
        </TaskRow>
      </TaskWrapper>
    ));
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;

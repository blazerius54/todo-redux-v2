import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ALL_TASKS } from '../../utils/constants';
import SingleTask from '../SingleTask';

const TaskWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;

  footer {
    display: flex;
    justify-content: space-between;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class TaskList extends React.PureComponent {
  render() {
    const { tasks, deleteTask, priority } = this.props;
    return (
      <TaskWrapper>
        {tasks.map((task, index) => {
          if (task.priority === priority || priority === ALL_TASKS) {
            return (
              <SingleTask
                deleteTask={deleteTask}
                task={task}
                index={index}
                key={task.title}
                onChangeForm={this.props.onChangeForm}
                saveTask={this.props.saveTask}
                setStateAsEditing={this.props.setStateAsEditing}
                saveEditedTask={this.props.saveEditedTask}
              />
            );
          }
          return null;
        })}
      </TaskWrapper>
    );
  }
}

TaskList.propTypes = {
  onChangeForm: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  setStateAsEditing: PropTypes.func.isRequired,
  saveEditedTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  priority: PropTypes.string.isRequired,
};

export default TaskList;

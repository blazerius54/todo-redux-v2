import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TaskWrapper, TaskRow } from './styled';
import Form from '../Form';
import SingleTask from '../SingleTask';
/* eslint-disable react/prefer-stateless-function */
class TaskList extends React.PureComponent {
  render() {
    const { tasks, deleteTask, priority } = this.props;
    return (
      <div>
        {tasks.map((task, index) => {
          if(task.priority === priority) {
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
            )
          } else {
            return null
          }
        })}
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;

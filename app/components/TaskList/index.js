import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TaskWrapper, TaskRow } from './styled';
/* eslint-disable react/prefer-stateless-function */
class TaskList extends React.PureComponent {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        {
          tasks.map(({ title, description, priority, date }) => (
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
              {date && (
                <TaskRow>
                  <p>Date:</p>
                  <p>{moment(date).format('D M YYYY')}</p>
                </TaskRow>
              )}
            </TaskWrapper>
          ))
        }
      </div>
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;

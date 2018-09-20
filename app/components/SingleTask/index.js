import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TaskWrapper, TaskRow } from './styled';
import Form from '../Form';
/* eslint-disable react/prefer-stateless-function */
class SingleTask extends React.PureComponent {
  constructor(props) {
    super(props);
    // const { title, description, priority, date } = this.props.task;
    this.state = {
      isEditing: false,
    };
  }

  resetState = () => {
    this.setState({
      title: '',
      description: '',
      priority: '',
      date: '',
    });
  };


  handleEditClick = () => {
    this.setState({
      isEditing: true,
    });
    this.props.setStateAsEditing(this.props.task);
  };

  handleSaveClick = (e) => {
    e.preventDefault();
    this.props.saveEditedTask(this.props.index);
    this.setState({
      isEditing: false,
    });
  };

  render() {
    const { title, description, priority, date } = this.props.task;
    const { deleteTask, index } = this.props;
    const { isEditing } = this.state;
    return (
      <div>
        {!isEditing ? (
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
            <footer>
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button onClick={() => this.handleEditClick()}>Edit</button>
            </footer>
          </TaskWrapper>
        ) : (
          <Form
            task={this.props.task}
            onChangeForm={this.props.onChangeForm}
            saveTask={this.handleSaveClick}
          />
        )}
      </div>
    );
  }
}

SingleTask.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleTask;

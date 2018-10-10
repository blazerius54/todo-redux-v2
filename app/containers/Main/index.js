import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import {
  makeSelectTasks,
  makeSelectLoading,
  makeSelectPriority,
} from '../App/selectors';
import Form from '../../components/Form';
import Spinner from '../../components/Loader';
import {
  requestTasks,
  addTaskRequest,
  deleteTaskRequest,
  editTask,
  changeTaskFilter,
} from './actions';
import TaskList from '../../components/TaskList';
import {
  ALL_TASKS,
  LOW_PRIORITY,
  MEDIUM_PRIORITY,
  HIGH_PRIORITY,
} from '../../utils/constants';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const priorities = [ALL_TASKS, LOW_PRIORITY, MEDIUM_PRIORITY, HIGH_PRIORITY];

/* eslint-disable react/prefer-stateless-function */
class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: '',
      date: '',
      error: false,
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

  onChangeForm = (propertyName, value) => {
    this.setState({
      [propertyName]: value,
      error: false,
    });
  };

  saveTask = (e) => {
    const {
 title, description, priority, date 
} = this.state;
    e.preventDefault();
    if (
      !this.state.title.length ||
      !this.state.description.length ||
      !this.state.priority.length
    ) {
      this.setState({
        error: true,
      });
      return;
    }
    const payload = {
      title,
      description,
      priority,
      date,
    };
    this.props.addTaskRequest(payload);
    this.resetState();
  };

  deleteTask = index => {
    this.props.deleteTaskRequest(index);
  };

  setStateAsEditing = (task) => {
    const { title, description, priority, date } = task;
    this.setState({
      title,
      description,
      priority,
      date,
    });
  };

  saveEditedTask = (index) => {
    const { title, description, priority, date } = this.state;

    const task = {
      title,
      description,
      priority,
      date,
    };
    this.props.editTask(index, task);
    this.resetState();
  };

  componentDidMount() {
    this.props.requestTasks();
  }

  handlePriorityChange = (item) => {
    this.props.changeTaskFilter(item);
  };

  render() {
    const { tasks, isLoading, priority } = this.props;
    return (
      <div>
        <ButtonHeader>
          <p>Priority:</p>
          <ButtonWrapper>
            {priorities.map(item => (
              <button onClick={() => this.handlePriorityChange(item)}>
                {item}
              </button>
            ))}
          </ButtonWrapper>
        </ButtonHeader>
        <Form
          onChangeForm={this.onChangeForm}
          saveTask={this.saveTask}
          addTaskRequest={addTaskRequest}
        />
        {tasks && (
          <TaskList
            deleteTask={this.deleteTask}
            tasks={tasks}
            onChangeForm={this.onChangeForm}
            saveTask={this.saveTask}
            setStateAsEditing={this.setStateAsEditing}
            saveEditedTask={this.saveEditedTask}
            priority={priority}
          />
        )}
        {isLoading && <Spinner />}
        {this.state.error && 'ERROR'}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
  isLoading: makeSelectLoading(),
  priority: makeSelectPriority(),
});

const withConnect = connect(
  mapStateToProps,
  {
    requestTasks,
    addTaskRequest,
    deleteTaskRequest,
    editTask,
    changeTaskFilter,
  },
);

const withSaga = injectSaga({ key: 'Main', saga });

Main.propTypes = {
  requestTasks: PropTypes.func.isRequired,
  addTaskRequest: PropTypes.func.isRequired,
  deleteTaskRequest: PropTypes.func.isRequired,
  changeTaskFilter: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  tasks: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  priority: PropTypes.string.isRequired,
};

export default compose(
  withConnect,
  withSaga,
)(Main);

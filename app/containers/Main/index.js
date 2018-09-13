import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import { makeSelectTasks, makeSelectLoading } from '../App/selectors';
import Form from '../../components/Form';
import Spinner from '../../components/Loader';
import { requestTasks, sendTaskRequest } from './actions';
import TaskList from '../../components/TaskList';

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

  onChangeForm = (propertyName, value) => {
    this.setState({
      [propertyName]: value,
      error: false,
    });
  };

  saveTask = e => {
    const { title, description, priority, date } = this.state;
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
    this.props.sendTaskRequest(payload);
  };

  componentDidMount() {
    this.props.requestTasks();
  }

  render() {
    const { tasks, isLoading } = this.props;
    return (
      <div>
        <Form
          onChangeForm={this.onChangeForm}
          saveTask={this.saveTask}
          date={this.state.date}
          sendTaskRequest={sendTaskRequest}
        />
        {tasks && <TaskList tasks={tasks} />}
        {isLoading && <Spinner />}
        {this.state.error && 'ERROR'}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
  isLoading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  {
    requestTasks,
    sendTaskRequest,
  },
);

const withSaga = injectSaga({ key: 'Main', saga });

Main.propTypes = {
  requestTasks: PropTypes.func.isRequired,
  sendTaskRequest: PropTypes.func.isRequired,
  tasks: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
};

export default compose(
  withConnect,
  withSaga,
)(Main);

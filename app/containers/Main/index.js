import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import { makeSelectTasks } from '../App/selectors';
import Form from '../../components/Form';
import { requestTasks, sendTaskRequest } from './actions';

/* eslint-disable react/prefer-stateless-function */
class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: '',
      date: moment(),
      error: false,
      tasks: [],
    };
  }

  onChangeForm = (propertyName, value) => {
    this.setState({
      [propertyName]: value,
      error: false,
    });
  };

  saveTask = e => {
    e.preventDefault();
    if (
      !this.state.title.length ||
      !this.state.description.length ||
      !this.state.priority.length
    ) {
      this.setState({
        error: true,
      });
    }
  };

  componentDidMount () {
    this.props.requestTasks();
    console.log(this.props.tasks);
  }

  render() {
    const { tasks, requestTasks, sendTaskRequest } = this.props;
    return (
      <div>
        <button onClick={() => this.props.requestTasks()}>click</button>
        <button onClick={() => sendTaskRequest(this.state)}>click2</button>
        <button onClick={() => console.log(tasks)}>click3</button>
        <Form
          onChangeForm={this.onChangeForm}
          saveTask={this.saveTask}
          date={this.state.date}
        />
        {
          tasks && tasks.map(task => {
            return (
              <p key={task.description}>{task.description}</p>
            )
          })
        }
        {this.state.error && 'ERROR'}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
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
};

export default compose(withConnect, withSaga)(Main);

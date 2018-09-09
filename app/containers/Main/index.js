import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import moment from 'moment';
import { makeSelectTasks } from '../App/selectors';
import Form from '../../components/Form';
import { requestTasks } from './actions';

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
    };
  }

  onChangeForm = (propertyName, value) => {
    this.setState({
      [propertyName]: value,
      error: false,
    });
    console.log(propertyName, value);
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

  render() {
    return (
      <div>
        <button onClick={() => this.props.requestTasks()}>click</button>
        <Form
          onChangeForm={this.onChangeForm}
          saveTask={this.saveTask}
          date={this.state.date}
        />
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
  },
);

const withSaga = injectSaga({ key: 'Main', saga });

Form.propTypes = {
  requestTasks: PropTypes.func.isRequired,
};

export default compose(withConnect, withSaga)(Main);

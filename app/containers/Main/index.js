import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import moment from 'moment';
import { makeSelectTasks } from '../App/selectors';
import Form from '../../components/Form';

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

export default connect(mapStateToProps)(Main);

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
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
      date: null,
      error: false,
    };
  }

  onChangeForm = (propertyName, value) => {
    this.setState({
      [propertyName]: value,
    });
  };

  saveTask = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onChangeForm={this.onChangeForm} saveTask={this.saveTask}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
});

export default connect(mapStateToProps)(Main);

import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { TaskForm, TaskInfo, TaskRow } from './styled';

/* eslint-disable react/prefer-stateless-function */
class Form extends React.PureComponent {
  render() {
    const title = this.props.title || '';
    const description = this.props.description || '';
    const { onChangeForm, saveTask } = this.props;
    return (
      <TaskForm
        onSubmit={e => {
          saveTask(e);
        }}
      >
        <TaskInfo>
          <TaskRow>
            <span>Title:</span>
            <input
              type="text"
              defaultValue={title}
              onChange={e => onChangeForm('title', e.target.value)}
            />
          </TaskRow>
          <TaskRow>
            <span>Description:</span>
            <textarea
              defaultValue={description}
              onChange={e => onChangeForm('description', e.target.value)}
            />
          </TaskRow>
          <TaskRow>
            <span>Priority:</span>
            <select
              name="todoPriority"
              onChange={e => onChangeForm('priority', e.target.value)}
            >
              <option />
              <option value="0">low</option>
              <option value="1">medium</option>
              <option value="2">high</option>
            </select>
          </TaskRow>
          <TaskRow>
            <span>
              Date <span className="necessary">(if necessary)</span>
            </span>
            <DatePicker
              selected={this.props.date}
              onChange={e => onChangeForm('date', moment(e))}
            />
          </TaskRow>
        </TaskInfo>
        <button type="submit" className="save-btn">
          Save
        </button>
      </TaskForm>
    );
  }
}

Form.propTypes = {
  onChangeForm: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.object,
};

export default Form;

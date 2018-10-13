import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { TaskForm, TaskInfo, TaskRow } from './styled';

/* eslint-disable react/prefer-stateless-function */
class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.task && this.props.task.date ? moment(this.props.task.date) : null,
    };
  }
  render() {
    const { onChangeForm, saveTask } = this.props;
    let title = null;
    let description = null;
    let priority = null;
    // let date = null;
    if(this.props.task) {
      title = this.props.task.title;
      description = this.props.task.description;
      priority = this.props.task.priority;
      // date = moment(this.props.task.date);
    }

    const { date } = this.state;

    return (
      <TaskForm
        onSubmit={e => {
          e.target.reset();
          this.setState({
            date: null,
          });
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
              defaultValue={priority}
              onChange={e => onChangeForm('priority', e.target.value)}
            >
              <option/>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </TaskRow>
          <TaskRow>
            <span>
              Date <span className="necessary">(if necessary)</span>
            </span>
            <DatePicker
              dateFormat="D M YYYY"
              selected={date}
              onChange={(e) => {
                this.setState({
                  date: moment(e),
                });
                onChangeForm('date', moment(e));
              }}
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
  date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Form;

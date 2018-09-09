import React from 'react';
import { TaskForm, TaskInfo, TaskRow } from './styled';
/* eslint-disable react/prefer-stateless-function */
class Form extends React.PureComponent {
  render() {
    const title = this.props.title || '';
    const description = this.props.description || '';
    const { onChangeForm, saveTask } = this.props;
    return (
      <TaskForm
        onSubmit={(e) => {
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
            <input
              type="datetime-local"
              onChange={e => onChangeForm('date', e.target.value)}
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
export default Form;

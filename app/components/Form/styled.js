import styled from 'styled-components';

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;

  button {
    background: white;
  }

  input,
  select,
  textarea {
    flex-basis: 70%;
    border-bottom: 2px solid #2222;
  }
`;

export const TaskInfo = styled.div``;

export const TaskRow = styled.div`
  display: flex;
  justify-content: space-between;
padding: 10px;
`;

import styled from 'styled-components';

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 40px auto;

  & > button {
    background: white;
  }

  input,
  select,
  textarea {
    flex-basis: 70%;
    border-bottom: 2px solid #2222;
    transition: all 0.5s ease;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-bottom: 2px solid #4c99cc;
    box-shadow: 0px 5px 5px -6px #4c99cc;
  }
`;

export const TaskInfo = styled.div``;

export const TaskRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

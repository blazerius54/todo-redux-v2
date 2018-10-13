import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriorityButton = styled.button`
  height: 40px;
  cursor: pointer;
  ${props => props.isActive && 'color: teal; border-bottom: 2px solid teal; margin-top: 1px; box-sizing: border-box;'}
`;

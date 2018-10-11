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
  color: ${props => props.isActive && 'white'};
`;

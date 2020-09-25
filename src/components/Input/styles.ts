import styled, { css } from 'styled-components';
import Tolltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: var(--textplace);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--white);

    &::placeholder {
      color: var(--textplace);
    }
  }

  svg {
    margin-right: 16px;
    color: ${props => props.isFilled && 'var(--primary)'};
  }
`;

export const Error = styled(Tolltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::after {
      border-color: #c53030 transparent;
    }
  }
`;

import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 16px;
  background: var(--primary);
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: var(--text);
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

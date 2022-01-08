import styled from 'styled-components';
import { COLOR, alpha } from '../../utils/Color';

export const Container = styled.div`
  position: relative;
  margin: 20px;
  box-sizing: border-box;

  * {
    box-sizing: inherit;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 16px 14px;
  outline: none;
  border: 2px solid ${alpha('#000000', 0.25)};
  border-radius: 5px;
  color: ${alpha('#000000', 0.5)};

  &:hover {
    border-color: ${alpha('#000000', 0.75)};
  }

  &:focus {
    border-color: ${COLOR.primary};
    & ~ label {
      transform: translate(14px, -20px);
      color: ${COLOR.primary};
    }
  }

  &:not([value='']) {
    & ~ label {
      transform: translate(14px, -20px);
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.2s;
  transform: translate(14px, 16px);
  pointer-events: none;
  color: ${alpha('#000000', 0.5)};
`;

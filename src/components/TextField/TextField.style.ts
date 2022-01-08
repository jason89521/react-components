import styled from 'styled-components';
import { COLOR, alpha } from '../../utils/Color';

export const Container = styled.div`
  position: relative;
  margin: 1rem;
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
  border: none;
  color: ${alpha('#000000', 0.5)};

  &:hover {
    & ~ fieldset {
      border-color: ${alpha('#000000', 0.75)};
    }
  }

  &:focus {
    padding: 16px 18.5px;
    & ~ label {
      transform: translate(16px, -7px) scale(0.9);
      color: ${COLOR.primary};
    }

    & ~ fieldset {
      border-color: ${COLOR.primary};
      border-width: 2px;

      & > legend {
        width: auto;
      }
    }
  }

  &:not([value='']) {
    padding: 16px 18.5px;
    & ~ label {
      transform: translate(16px, -7px) scale(0.9);
    }

    & ~ fieldset > legend {
      width: auto;
    }
  }
`;

export const Fieldset = styled.fieldset`
  position: absolute;
  inset: -5px 0 0;
  pointer-events: none;
  border-radius: 5px;
  border: 1px solid ${alpha('#000000', 0.25)};

  & > legend {
    width: 0;
    visibility: hidden;
    padding: 0;
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

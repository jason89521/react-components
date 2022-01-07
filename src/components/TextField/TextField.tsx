import React from 'react';
import styled from 'styled-components';
import { TextFieldProps, TextFieldState } from './TextField.type';
import { COLOR } from '../../utils/Color';

class TextField extends React.Component<TextFieldProps, TextFieldState> {
  state: Readonly<TextFieldState> = {
    value: '',
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { label } = this.props;
    return (
      <Container>
        <StyledInput type='text' onChange={this.onInputChange} placeholder='Name' />
        <StyledLabel htmlFor=''>{label}</StyledLabel>
      </Container>
    );
  }
}


const Container = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  display: block;
  box-sizing: border-box;
  margin-left: 0.75rem;
  margin-top: 0.5rem;
  border-left: 2px solid transparent;
  transition: all 0.5s;
  color: #666666;
`;

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.75rem;
  outline: none;
  border: 2px solid #aaaaaa;
  border-radius: 3px;
  font-size: 1.1rem;
  color: #000000;

  &:hover {
    border-color: #000000;
  }
  &:focus {
    border-color: ${COLOR.primary};
  }

  /* &::placeholder {
    color: #666666;
  } */

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2rem);
  }
`;

export default TextField;

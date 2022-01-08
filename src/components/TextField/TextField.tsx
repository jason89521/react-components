import React from 'react';
import { Container, Input, Label } from './TextField.style';
import { TextFieldProps, TextFieldState } from './TextField.type';

class TextField extends React.Component<TextFieldProps, TextFieldState> {
  state: Readonly<TextFieldState> = {
    value: '',
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });

    const { onChange } = this.props;
    if (onChange !== undefined) onChange(event);
  };

  render() {
    const { id, label, multiline = false, rows = 3 } = this.props;
    const as = multiline ? 'textarea' : 'input';
    return (
      <Container>
        <Input
          as={as}
          rows={rows}
          id={id}
          multiline={multiline}
          type='text'
          value={this.state.value}
          onChange={this.onInputChange}
        />
        <Label htmlFor={id}>{label}</Label>
      </Container>
    );
  }
}

export default TextField;

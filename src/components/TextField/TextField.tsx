import React from 'react';
import { Container, Input, Fieldset, Label } from './TextField.style';
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
    const { id, label } = this.props;
    return (
      <Container>
        <Input id={id} type='text' value={this.state.value} onChange={this.onInputChange} />
        <Fieldset>
          <legend>
            <span>{label}</span>
          </legend>
        </Fieldset>
        <Label htmlFor={id}>{label}</Label>
      </Container>
    );
  }
}



export default TextField;

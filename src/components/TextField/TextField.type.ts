import React from 'react';

export interface TextFieldProps {
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextFieldState {
  value: string;
}

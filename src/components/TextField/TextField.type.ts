import React from 'react';

export interface TextFieldProps {
  id?:string;
  label: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextFieldState {
  value: string;
}

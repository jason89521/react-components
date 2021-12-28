import React from 'react';
import styled from 'styled-components';
import { ButtonProps, StyledProps, Color, Padding } from './Button.types';

class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    size: 'medium',
    variant: 'text',
    color: 'primary',
  };

  static produceStyledProps(props: ButtonProps): StyledProps {
    const { size, color, variant } = props;
    const returnProps = {
      padding: Padding.medium,
      color: Color.primary,
      border: 'none',
      backgroundColor: Color.transparent,
      hoverBackgroundColor: Color.transparent as string,
      activeBackgroundColor: Color.transparent as string,
    };

    if (size !== undefined) returnProps.padding = Padding[size];

    if (color === undefined) return returnProps;

    switch (variant) {
      case 'contained':
        returnProps.color = Color.white;
        returnProps.backgroundColor = Color[color];
        returnProps.hoverBackgroundColor = Color[color] + 'aa';
        returnProps.activeBackgroundColor = Color[color];

        break;
      case 'outlined':
        returnProps.border = `2px solid ${Color[color]}`;
      default:
        returnProps.color = Color[color];
        returnProps.hoverBackgroundColor = Color[color] + '20';
        returnProps.activeBackgroundColor = Color[color] + '60';
        break;
    }

    return returnProps;
  }

  render() {
    const { children, onClick } = this.props;
    const { padding, color, border, backgroundColor, hoverBackgroundColor, activeBackgroundColor } =
      Button.produceStyledProps(this.props);
    return (
      <StyledButton
        color={color}
        border={border}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        activeBackgroundColor={activeBackgroundColor}
        padding={padding}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  }
}

const StyledButton = styled.button<StyledProps>`
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.2s;
  font-weight: 700;

  // using props
  border: ${props => props.border};
  padding: ${props => props.padding};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};

  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
  }

  &:active {
    background-color: ${props => props.activeBackgroundColor};
  }
`;

export default Button;

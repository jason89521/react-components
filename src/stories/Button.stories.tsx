import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '..';

export default {
  title: 'Button',
  components: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>click me</Button>;

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  color: 'primary',
};

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  variant: 'contained',
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  size: Button.defaultProps.size,
  color: Button.defaultProps.color,
  variant: Button.defaultProps.variant,
};

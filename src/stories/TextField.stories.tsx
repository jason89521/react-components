import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '..';

export default {
  title: 'TextField',
  components: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args}></TextField>;

export const Default = Template.bind({});
Default.args = {
  label: 'default',
};

import React from "react";
import Button from './Button';


export default{
    title: 'Button',
    component: Button,
    argTypes: {
        label:{
          options: ['Normal', 'Bold', 'Italic'],
          mapping: {
            Bold: <b>Bold</b>,
            Italic: <i>Italic</i>,
          },
        },
      },
      
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  Button: true,
  label: 'Button',   
};
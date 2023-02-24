import React from "react";
import ButtonR from './ButtonR';


export default{
    title: 'Button',
    component: ButtonR,
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

const Template = (args) => <ButtonR {...args} />;

export const button2 = Template.bind({});
button2.args = {
  Button: true,
  label: 'Button',   
};
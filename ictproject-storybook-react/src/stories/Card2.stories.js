import React from "react";
import Card2 from './Card2';


export default{
    title: 'COMPONENTS/Card2',
    component: Card2,
    argTypes: {
      label:{
        options: ['Normal', 'Bold', 'Italic'],
      },
    },
};

const Template = (args) => <Card2 {...args} />;

export const MediaCard2 = Template.bind({});
MediaCard2.args = {
  Card: true,
  label: 'Card2',
};


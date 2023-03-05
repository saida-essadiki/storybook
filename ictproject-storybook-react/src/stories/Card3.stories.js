import React from "react";
import Card3 from './Card3';


export default{
    title: 'COMPONENTS/Card3',
    component: Card3,
    argTypes: {
      label:{
        options: ['Normal', 'Bold', 'Italic'],
      },
    },
};

const Template = (args) => <Card3 {...args} />;

export const MediaCard3 = Template.bind({});
MediaCard3.args = {
  Card: true,
  label: 'Card2',
};


import React from "react";
import Card from './Card';


export default{
    title: 'COMPONENTS/Card',
    component: Card,
    argTypes: {
      label:{
        options: ['Normal', 'Bold', 'Italic'],
      },
    },
};

const Template = (args) => <Card {...args} />;

export const MediaCard = Template.bind({});
MediaCard.args = {
  Card: true,
  label: 'Card',
};


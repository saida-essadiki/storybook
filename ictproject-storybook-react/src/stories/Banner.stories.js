import React from 'react';
import Banner from './Banner';


export default {
  title: 'COMPONENTS/Banner',
  component: Banner,
};


const Template = (args) => <Banner {...args} />;


export const Default = Template.bind({});
Default.args = {
  src: 'https://i.pinimg.com/originals/11/78/cf/1178cf5dd4a6ccd59318305541030945.jpg',
  alt: 'Banner',
};




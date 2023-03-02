import React from 'react';
import Banner from './Banner';


export default {
  title: 'COMPONENTS/Banner',
  component: Banner,
};


const Template = (args) => <Banner {...args} />;


export const Default = Template.bind({});
Default.args = {
  src: 'https://4kwallpapers.com/images/walls/thumbs_3t/2230.jpg',
  alt: 'Banner',
};




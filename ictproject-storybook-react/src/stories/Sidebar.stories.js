import React from 'react';
import Sidebar from './Sidebar';


export default {
    title: 'Sidebar',
    component: Sidebar,
  };
  
  const Template = (args) => <Sidebar {...args} />;

export const open = Template.bind({});
open.args = {
};
export const collapsed = Template.bind({});
collapsed.args = {
  
    showSidebar: false,

};
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  
    loggedIn: true,

};
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  
    loggedIn:false,

};
/*export const normal = Template.bind({});
normal.args = {
};*/
/*export const adi = () => <Sidebar/>;*/
//export const LoggedIn = () => <Sidebar loggedIn={true} />;
//export const LoggedOut = () => <Sidebar loggedIn={false} />;
//export const open = () => <Sidebar showSidebar={true} />;
//export const closed = () => <Sidebar showSidebar={false} />;

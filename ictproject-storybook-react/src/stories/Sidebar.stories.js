import React from 'react';
import Sidebar from './Sidebar';
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
    title: 'COMPONENTS/Sidebar',
    component: Sidebar,
    decorators: [withRouter],
  };
  
  const Template = (args) => <Sidebar {...args} />;
export const Default = Template.bind({});
Default.story={
  parameters: {
    reactRouter: {
      routePath: '/feedback',
    
    }
}
};
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  
    loggedIn: true,

};
LoggedIn.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const LoginButton = await canvas.getByRole('button', {name: /Hello Storytesters/i });
    await userEvent.click(LoginButton);
  };
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  
    loggedIn:false,

};
LoggedOut.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const LoginButton = await canvas.getByRole('button', {name: /Login/i });
    await userEvent.click(LoginButton);
  };

/*export const normal = Template.bind({});
normal.args = {
};*/
/*export const adi = () => <Sidebar/>;*/
//export const LoggedIn = () => <Sidebar loggedIn={true} />;
//export const LoggedOut = () => <Sidebar loggedIn={false} />;
//export const open = () => <Sidebar showSidebar={true} />;
//export const closed = () => <Sidebar showSidebar={false} />;

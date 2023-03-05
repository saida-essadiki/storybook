/* import React from "react";
import FeedbackForm from "./FeedbackForm";
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest';

import {screen} from '@testing-library/dom';





export default {
    component: FeedbackForm,
    title: 'COMPONENTS/FeedbackForm'

}

const Template = (args) => <FeedbackForm {...args} />;

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({canvasElement, args}) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText('Name:', {
        selector: 'input',
    })
    await userEvent.type(emailInput, 'kaisa', {
        delay: 300,
    });

    const nameInput = canvas.getByLabelText('Email:', {
        selector: 'input',
    })
    await userEvent.type(nameInput, 'kaisa@otterklau.fi', {
        delay: 300,
    });

    const feedbackInput = canvas.getByLabelText('Feedback:', {
        selector: 'textarea',
    })
    await userEvent.type(feedbackInput, 'kaisa@otterklau.fi', {
        delay: 300,
    });   

    await userEvent.click(canvas.getByRole('button'));


   
}

export const TestingFailure = Template.bind({});
TestingFailure.play = async ({canvasElement, args}) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText('Name:', {
        selector: 'input',
    })
    await userEvent.type(emailInput, 'kaisa', {
        delay: 300,
    });

    const nameInput = canvas.getByLabelText('Email:', {
        selector: 'input',
    })
    await userEvent.type(nameInput, 'kaisaotterklau.fi', {
        delay: 300,
    });

    const feedbackInput = canvas.getByLabelText('Feedback:', {
        selector: 'textarea',
    })
    await userEvent.type(feedbackInput, 'Kaisa', {
        delay: 300,
    });   

    await userEvent.click(canvas.getByRole('button'));


   
}

export const TestingEmptyField = Template.bind({});
TestingEmptyField.play = async ({canvasElement, args}) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText('Name:', {
        selector: 'input',
    })
    await userEvent.type(emailInput, 'kaisa', {
        delay: 300,
    });


    const nameInput = canvas.getByLabelText('Email:', {
        selector: 'input',
    })
    await userEvent.type(nameInput, 'kaisafi', {
        delay: 300,
    });

    const feedbackInput = canvas.getByLabelText('Feedback:', {
        selector: 'textarea',
    })
    await userEvent.type(feedbackInput,'', {
        delay: 300,
    });   


    await userEvent.click(canvas.getByRole('button', {delay: 300}));

  /*  await waitFor(() => canvas.getByRole('alert'))*/

    /*await screen.getByRole('alert').toHaveValue('Please fill out this field.');*/


   
} */
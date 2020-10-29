import React from 'react';
import Accordian from '../components/accordian';
import faqData from '../fixtures/faq.json';
import OptForm from '../components/opt-form';

export default function FaqContainer(){
    return (

        <Accordian>
            <Accordian.Title> Frequently asked questions </Accordian.Title>
            { faqData.map( item => (

                <Accordian.Item key={item.id}>
                    <Accordian.Header> {item.header} </Accordian.Header>
                    <Accordian.Body> {item.body} </Accordian.Body>
                </Accordian.Item>
            ))}

            <OptForm>
            <OptForm.Text> Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Input placeholder="Enter email address"></OptForm.Input>
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm>
        </Accordian>
    );
}
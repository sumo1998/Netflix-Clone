import React from 'react';
import Feature from '../components/feature';
import OptForm from '../components/opt-form';

export default function FeatureContainer(){
    return (
        <Feature>
            <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </Feature>
    );
}

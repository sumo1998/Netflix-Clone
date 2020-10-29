import React from 'react';
import JumboContainer from '../containers/jumboContainer';
import FooterContainer from '../containers/footerContainer';
import FaqContainer from '../containers/faqContainer';
import HeaderContainer from '../containers/headerContainer';
import FeatureContainer from '../containers/featureContainer';

export default function Home(){
    return (
        <>
            <HeaderContainer>
                <FeatureContainer />
            </HeaderContainer>
            <JumboContainer />
            <FaqContainer />
            <FooterContainer />  
        </>
    );
}
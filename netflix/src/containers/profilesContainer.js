import React from 'react';
import Header from '../components/header';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';
import Profiles from '../components/profiles';

export default function SelectProfilesContainer({user, setProfile}){

    
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title> Who is watching? </Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick = {() => {setProfile({
                        displayName: user.displayName,
                        photoURL : user.photoURL
                    })}}>
                        <Profiles.Name> {user.displayName} </Profiles.Name>
                        <Profiles.Picture  src = {user.photoURL}/>
                    </Profiles.User>
                
                </Profiles.List>
            </Profiles>
        </>
    )
}
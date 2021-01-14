import React from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { } from 'react-router-dom';
import { Header, Profiles } from '../components';
export function SelectProfileContainer({ user, setProfile }) {

    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>
                    Quem está assistindo?
                </Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={
                        () => {
                            setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL
                            })
                        }
                    }>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}
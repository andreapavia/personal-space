import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import { Whoami } from '../../components/portOne/whoami/Whoami';

const PersonalSpace = () => {
    return (
        <PageTransition>
            <Whoami />
        </PageTransition>
    );
};

export default PersonalSpace;

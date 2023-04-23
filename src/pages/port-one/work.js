import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import { Work } from '../../components/portOne/work/Work';

const PersonalSpace = () => {
    return (
        <PageTransition>
            <Work />
        </PageTransition>
    );
};

export default PersonalSpace;

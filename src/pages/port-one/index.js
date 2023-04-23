import React from 'react';
import { PortOneHero } from '../../components/portOne/portOneHero/PortOneHero';
import PageTransition from 'gatsby-plugin-page-transitions';

const PersonalSpace = () => {
    const HeadingTextComponent = () => (
        <span>
            <span className="italic">A</span>N<span className="italic">D</span>
            RE<span className="italic">A</span>
            <br />P<span className="italic">A</span>
            VI<span className="italic">A</span>
        </span>
    );
    const SubtitleTextComponent = () => (
        <>
            Frontend developer with a secret passion for ui and ux design who
            likes fast two seated cabriolet cars and shiny red italian
            motorcycles. <br /> as a matter of facts, i am italian myself.
        </>
    );

    return (
        <PageTransition>
            <PortOneHero
                topGradientColor={'#110e0a'}
                bottomGradientColor={'#2f1106'}
                HeadingTextComponent={HeadingTextComponent}
                SubtitleTextComponent={SubtitleTextComponent}
                color={'#fff'}
            />
        </PageTransition>
    );
};

export default PersonalSpace;

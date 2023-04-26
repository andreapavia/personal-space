import React, { useEffect, useRef } from 'react';
import { PortOneHero } from '../portOneHero/PortOneHero';
import {
    LayoutFull,
    LayoutFullPlusRows,
} from '../../imageLayoutComponents/ImageLayoutComponents';
import './work.scss';

const HeadingTextComponent = () => (
    <span>
        <span className="italic">R</span>ECENT
        <br />
        <span className="italic">W</span>
        ORK
    </span>
);
const SubtitleTextComponent = () => (
    <>
        a collection of projects and things i probably had multiple headaches
        on. <br /> and i do say i love this job.
    </>
);

export const Work = () => {
    const layoutsContainerRef = useRef();
    const containerRef = useRef();

    const onScroll = () => {
        // TODO INFINITE SCROLL
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    return (
        <section className="portone-default work" ref={containerRef}>
            <PortOneHero
                topGradientColor={'transparent'}
                bottomGradientColor={'transparent'}
                HeadingTextComponent={HeadingTextComponent}
                SubtitleTextComponent={SubtitleTextComponent}
                color={'#000'}
            />
            <div ref={layoutsContainerRef} className="work-items">
                <LayoutFull />
                <LayoutFullPlusRows orientation={'right'} />
                <LayoutFull />
                <LayoutFullPlusRows orientation={'left'} />
            </div>
        </section>
    );
};

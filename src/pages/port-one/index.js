import React, { useCallback, useEffect, useState } from 'react';
import { PortOneHero } from '../../components/portOne/portOneHero/PortOneHero';
import { navigate } from 'gatsby';
import '../../styles/portOne/portone-global.scss';
import { PATH_WORK } from '../../lib/portOne/paths';

const PersonalSpace = () => {
    const [scrolled, setScrolled] = useState(false);
    const body = document.querySelector('body');

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

    const onScroll = useCallback(() => {
        Object.assign(body.style, {
            overflow: 'hidden',
            height: '100%',
        });

        if (!scrolled) {
            setScrolled(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrolled]);

    useEffect(() => {
        if (scrolled) {
            navigate(PATH_WORK);
        }
    }, [scrolled]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            Object.assign(body.style, {
                overflow: 'visible',
                height: 'auto',
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="portone-default portone-index">
            <PortOneHero
                topGradientColor={'#110e0a'}
                bottomGradientColor={'#2f1106'}
                HeadingTextComponent={HeadingTextComponent}
                SubtitleTextComponent={SubtitleTextComponent}
                color={'#fff'}
            />
        </section>
    );
};

export default PersonalSpace;

import React from 'react';

import './portOneHero.scss';

export const PortOneHero = ({
    topGradientColor,
    bottomGradientColor,
    HeadingTextComponent,
    SubtitleTextComponent,
    color,
}) => {
    const backgroundGradient = `linear-gradient(
        0deg,
        ${bottomGradientColor} 0%,
        ${topGradientColor} 30%
    )`;

    return (
        <>
            <section
                className="portone-default portone"
                style={{ background: backgroundGradient, color }}
            >
                <div className="portone__gradient"></div>
                <div className="portone__heading heading">
                    <h1 className="heading__main">
                        <HeadingTextComponent />
                    </h1>
                    <h2 className="heading__sub">
                        <SubtitleTextComponent />
                    </h2>
                </div>
            </section>
        </>
    );
};

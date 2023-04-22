import React from 'react';

import './portOne.scss';

export const PortOne = () => {
    return (
        <>
            <section className="portone-default portone">
                <div className="portone__gradient"></div>
                <div className="portone__heading heading">
                    <h1 className="heading__main">
                        <span>
                            <span className="italic">A</span>N
                            <span className="italic">D</span>
                            RE<span className="italic">A</span>
                            <br />P<span className="italic">A</span>
                            VI<span className="italic">A</span>
                        </span>
                    </h1>
                    <h2 className="heading__sub">
                        Frontend developer with a secret passion for ui and ux
                        design who likes fast two seated cabriolet cars and
                        shiny red italian motorcycles. <br /> as a matter of
                        facts, i am italian myself.
                    </h2>
                </div>
            </section>
        </>
    );
};

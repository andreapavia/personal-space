import React, { useState } from 'react';
import './portOne.scss';

const pages = [
    {
        label: 'Home',
        slug: 'home',
    },
    {
        label: 'Work',
        slug: 'work',
    },
    {
        label: 'whoami',
        slug: 'whoami',
    },
];
export const PortOne = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [decorationStyle, setDecorationStyle] = useState({
        left: 30,
        width: 49,
    });

    console.log(currentPage);

    return (
        <>
            <section className="portone">
                <div className="portone__gradient"></div>
                <div className="portone__heading heading">
                    <h1 className="heading__main">
                        <span>
                            {/* A<span className="italic">N</span>
                        DREA
                        <br />
                        <span className="italic">P</span>
                        AVIA */}
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
                <div className="portone__handlebar handlebar">
                    <div className="handlebar__inner">
                        <ul>
                            {pages.map((page, i) => (
                                <li key={i}>
                                    <button
                                        onClick={(e) => {
                                            console.log(e.target);
                                            setCurrentPage(page.slug);
                                            setDecorationStyle({
                                                left: e.target.offsetLeft + 30,
                                                width: e.target.clientWidth,
                                            });
                                        }}
                                    >
                                        {page.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div
                            className="handlebar__decoration decoration"
                            style={{
                                left: `${decorationStyle.left}px`,
                                width: `${decorationStyle.width}px`,
                            }}
                        ></div>
                    </div>
                </div>
            </section>
        </>
    );
};

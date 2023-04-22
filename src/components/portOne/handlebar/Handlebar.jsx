/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import './handlebar.scss';

const pages = [
    {
        label: 'Home',
        id: 'home',
        slug: '/port-one/',
    },
    {
        label: 'Work',
        id: 'work',
        slug: '/port-one/work/',
    },
    {
        label: 'whoami',
        id: 'whoami',
        slug: '/port-one/whoami/',
    },
];

export const Handlebar = () => {
    const [currentPage, setCurrentPage] = useState(
        pages.find((page) => page.slug === window.location.pathname)
    );
    const [decorationStyle, setDecorationStyle] = useState({
        left: 30,
        width: 49,
    });

    useEffect(() => {
        const currentElement = document.querySelector(
            `.handlebar__${currentPage.id}`
        );
        setDecorationStyle({
            left: currentElement.offsetLeft + 30,
            width: currentElement.clientWidth,
        });
    }, []);

    return (
        <div className="handlebar">
            <div className="handlebar__inner">
                <ul>
                    {pages.map((page, i) => (
                        <li key={i}>
                            <button
                                className={`handlebar__${page.id}`}
                                onClick={(e) => {
                                    console.log(e.target);
                                    setCurrentPage(page);
                                    setDecorationStyle({
                                        left: e.target.offsetLeft + 30,
                                        width: e.target.clientWidth,
                                    });
                                    navigate(page.slug);
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
    );
};

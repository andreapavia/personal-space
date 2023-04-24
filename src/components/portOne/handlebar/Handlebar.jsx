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
const minOffset = 20;

export const Handlebar = ({ location }) => {
    const [currentPage, setCurrentPage] = useState(
        pages.find((page) => page.slug === location.pathname)
    );
    const [decorationStyle, setDecorationStyle] = useState({
        left: minOffset,
        width: 49,
    });

    useEffect(() => {
        setCurrentPage(pages.find((page) => page.slug === location.pathname));
    }, [location.pathname]);

    useEffect(() => {
        if (currentPage) {
            const currentElement = document.querySelector(
                `.handlebar__${currentPage.id}`
            );

            setDecorationStyle({
                left: currentElement.offsetLeft + minOffset,
                width: currentElement.clientWidth,
            });
        }
    }, [currentPage]);

    return (
        <div className="handlebar">
            <div className="handlebar__inner">
                <ul>
                    {pages.map((page, i) => (
                        <li key={i}>
                            <button
                                className={`handlebar__${page.id}`}
                                onClick={(e) => {
                                    setCurrentPage(page);
                                    setDecorationStyle({
                                        left: e.target.offsetLeft + minOffset,
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

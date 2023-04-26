import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { PATH_HOME, PATH_WHOAMI, PATH_WORK } from '../../../lib/portOne/paths';
import './handlebar.scss';

const pages = [
    {
        label: 'Home',
        id: 'home',
        slug: PATH_HOME,
    },
    {
        label: 'Work',
        id: 'work',
        slug: PATH_WORK,
    },
    {
        label: 'whoami',
        id: 'whoami',
        slug: PATH_WHOAMI,
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
    const [disabled, setDisabled] = useState(false);

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
        <div className={`handlebar ${disabled ? 'handlebar--disabled' : ''}`}>
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
                                    setDisabled(true);
                                    setTimeout(() => setDisabled(false), 1200);
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

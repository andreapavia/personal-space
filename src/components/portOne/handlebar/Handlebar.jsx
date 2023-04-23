import React, { useEffect, useRef, useState } from 'react';
import { navigate } from 'gatsby';
import { useScreenshot } from 'use-react-screenshot';
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

export const Handlebar = ({ pageRef }) => {
    const [image, takeScreenshot] = useScreenshot();
    const [currentPage, setCurrentPage] = useState(
        pages.find((page) => page.slug === window.location.pathname)
    );
    const [decorationStyle, setDecorationStyle] = useState({
        left: minOffset,
        width: 49,
    });
    const imageElementRef = useRef();

    const getImage = () => takeScreenshot(pageRef.current);

    useEffect(() => {
        const currentElement = document.querySelector(
            `.handlebar__${currentPage.id}`
        );
        setDecorationStyle({
            left: currentElement.offsetLeft + minOffset,
            width: currentElement.clientWidth,
        });
    }, []);

    useEffect(() => {
        if (image) {
            setTimeout(() => (imageElementRef.current.src = null), 2000);
            navigate('/port-one/whoami/');
        }
    }, [image]);

    console.log('pageRef', pageRef);

    return (
        // <button style={{ marginBottom: '10px' }} onClick={getImage}>
        //         Take screenshot
        //     </button>
        //     <img src={image} alt={'Screenshot'} />
        <>
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
                                            left:
                                                e.target.offsetLeft + minOffset,
                                            width: e.target.clientWidth,
                                        });
                                        getImage();
                                        // navigate(page.slug);
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
            <div className="fake-screen">
                {image && (
                    <img ref={imageElementRef} src={image} alt={'Screenshot'} />
                )}
            </div>
        </>
    );
};

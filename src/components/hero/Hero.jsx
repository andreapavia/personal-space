import React, { useEffect, useState } from 'react';
import './hero.scss';

const Blog = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const wordArray = ['frontend developer', 'star wars fan', 'curious dude'];

    useEffect(() => {
        setTimeout(() => {
            setWordIndex(wordIndex < 2 ? wordIndex + 1 : 0);
        }, 500);
    }, [wordIndex]);

    return (
        <div className="blog section">
            <div className="hero">
                <div className="hero__black-hole"></div>
                <div className="hero__left-text title">
                    <h1>
                        andrea francesco <br /> pavia
                        <span className="title__underline title__underline--upper"></span>
                        <span className="title__underline title__underline--lower"></span>
                    </h1>
                </div>
                <div className="hero__right-text">
                    <h2>{wordArray[wordIndex]}</h2>
                </div>
            </div>
        </div>
    );
};

export default Blog;

import React, { useRef } from 'react';
import { navigate } from 'gatsby';
import './hero.scss';

const headingStrings = [
    'ANDREA',
    'FRANCESCO',
    'PAVIA',
    'FRONTEND',
    'DEVELOPER',
];

const Blog = () => {
    const headingSpanRefs = useRef([]);
    const headingSpanComponents = headingStrings.map((string, i) => {
        return (
            <span
                className="textbar__row"
                key={i}
                ref={(el) => (headingSpanRefs.current[i] = el)}
            >
                {string}
            </span>
        );
    });
    const descriptionRef = useRef();

    const onNavigateButtonClick = () => {
        const disappearAnimationDelay = 100;
        // const disappearAnimationDuration = 400;

        descriptionRef.current.classList.add('test');
        headingSpanRefs.current.forEach((element, i) => {
            setTimeout(() => {
                element.classList.add('test');
            }, disappearAnimationDelay * i);
        });

        setTimeout(() => {
            navigate('/about');
        }, disappearAnimationDelay * headingStrings.length);
    };

    return (
        <div className="blog section">
            <div className="hero">
                <div className="hero__textbar textbar">
                    <h1>{headingSpanComponents}</h1>
                </div>
                <div
                    className="hero__description description"
                    ref={descriptionRef}
                >
                    <p className="description__text-p">
                        Hey, my name and occupation are written in a very big
                        font on the other side of the screen, so I assume you
                        know both by now.
                    </p>

                    <p className="description__text-p">
                        I enjoy sensational and gorgeous looking things. Two
                        quick examples? User interfaces and motorcycles. Funnily
                        enough, the way this text is placed is probably not even
                        decent looking. This means I never stop learning!
                    </p>

                    <p className="description__text-p">
                        I also work on and like other things. There is a longer
                        and more boring version if you really are interested.
                        <button onClick={onNavigateButtonClick}>👉🏻</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

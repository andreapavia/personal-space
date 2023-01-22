import React, { useEffect, useState } from 'react';
import './blog.scss';

const Blog = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const wordArray = ['frontend developer', 'star wars fan', 'curious dude'];

    useEffect(() => {
        const ball = document.querySelector('div.ball');
        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        let speed = 0.08;

        function animate() {
            let distX = mouseX - ballX;
            let distY = mouseY - ballY;

            ballX = ballX + distX * speed;
            ballY = ballY + distY * speed;

            ball.style.left = ballX + 'px';
            ball.style.top = ballY + 'px';

            requestAnimationFrame(animate);
        }

        animate();

        document.addEventListener('mousemove', function (event) {
            mouseX = event.pageX;
            mouseY = event.pageY;
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setWordIndex(wordIndex < 2 ? wordIndex + 1 : 0);
        }, 500);
    }, [wordIndex]);

    //   console.log(wordIndex)
    return (
        <div className="blog">
            <div className="ball"></div>
            <div className="header">
                <div className="header__logo">
                    <h3>
                        andrea francesco <br /> pavia
                    </h3>
                </div>
                <div className="header__hamburger">
                    <input
                        type="checkbox"
                        id="hamby"
                        className="hamby visuallyHidden"
                    />
                    <label htmlFor="hamby">
                        <div className="hamburger hamburger4">
                            <span className="bar bar1"></span>
                            <span className="bar bar2"></span>
                            <span className="bar bar3"></span>
                            <span className="bar bar4"></span>
                            <span className="bar bar5"></span>
                        </div>
                    </label>
                </div>
            </div>
            <div className="hero">
                <div className="hero__black-hole"></div>
                <div className="hero__left-text">
                    <h1>
                        andrea francesco <br /> pavia
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

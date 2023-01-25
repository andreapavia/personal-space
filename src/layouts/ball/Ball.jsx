import React, { useEffect } from 'react';
import './ball.scss';

const onMouseMove = (event, mouseCoordinates) => {
    mouseCoordinates.x = event.pageX - window.scrollX;
    mouseCoordinates.y = event.pageY - window.scrollY;
};

const Ball = () => {
    useEffect(() => {
        const ball = document.querySelector('div.ball');
        let mouseCoordinates = {
            x: 0,
            y: 0,
        };
        let ballX = 0;
        let ballY = 0;
        let speed = 0.08;
        const eventFn = (event) => onMouseMove(event, mouseCoordinates);

        function animate() {
            let distX = mouseCoordinates.x - ballX;
            let distY = mouseCoordinates.y - ballY;

            ballX = ballX + distX * speed;
            ballY = ballY + distY * speed;

            ball.style.left = ballX + 'px';
            ball.style.top = ballY + 'px';

            requestAnimationFrame(animate);
        }

        document.addEventListener('mousemove', eventFn);

        animate();

        return () => {
            document.removeEventListener('mousemove', eventFn);
        };
    }, []);

    return <div className="ball"></div>;
};

export default Ball;

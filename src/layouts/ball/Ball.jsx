import React, { useEffect } from 'react';
import './ball.scss';

const onMouseMove = (event, mouseCoordinates) => {
    mouseCoordinates.x = event.pageX - window.scrollX;
    mouseCoordinates.y = event.pageY - window.scrollY;
};

const Ball = () => {
    useEffect(() => {
        const ball = document.querySelector('div.ball');
        const xLine = document.querySelector('div.xline');
        const yLine = document.querySelector('div.yline');
        const eventFn = (event) => onMouseMove(event, mouseCoordinates);

        let mouseCoordinates = {
            x: 0,
            y: 0,
        };
        let ballX = 0;
        let ballY = 0;
        let xLineY = 0;
        let yLineX = 0;
        let speed = 0.08;

        function animate() {
            let distX = mouseCoordinates.x - ballX;
            let distY = mouseCoordinates.y - ballY;

            ballX = ballX + distX * speed;
            ballY = ballY + distY * speed;
            xLineY = xLineY + distY * speed;
            yLineX = yLineX + distX * speed;

            ball.style.left = ballX + 'px';
            ball.style.top = ballY + 'px';
            xLine.style.top = xLineY + 'px';
            yLine.style.left = yLineX + 'px';

            requestAnimationFrame(animate);
        }

        document.addEventListener('mousemove', eventFn);

        animate();

        return () => {
            document.removeEventListener('mousemove', eventFn);
        };
    }, []);

    return (
        <>
            <div className="ball"></div>
            <div className="yline"></div>
            <div className="xline"></div>
        </>
    );
};

export default Ball;

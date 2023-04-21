import React, { useEffect, useState } from 'react';

import { getRandomInt } from '../../lib/math';

import './circles.scss';

const Circles = ({ quantity }) => {
    const [circles, setCircles] = useState([]);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

    // console.log(circles);
    // console.log(mouseOffset);

    useEffect(() => {
        document.addEventListener('mousemove', (evt) => {
            evt;
            setMouseOffset({
                x: evt.clientX,
                y: evt.clientY,
            });
        });

        setCircles(
            Array.from(Array(quantity)).map(() => {
                const circle = document.createElement('div');
                const dimension = getRandomInt(10, 50);

                Object.assign(circle.style, {
                    width: `${dimension}px`,
                    height: `${dimension}px`,
                    borderRadius: '100%',
                    backgroundColor: `rgba(${getRandomInt(
                        0,
                        255
                    )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 1)`,
                    position: 'fixed',
                    top: `${getRandomInt(50, window.innerHeight - 50)}px`,
                    left: `${getRandomInt(50, window.innerWidth - 50)}px`,
                    mixBlendMode: 'difference',
                });

                document.querySelector('body').appendChild(circle);

                return circle;
            })
        );
    }, []);

    useEffect(() => {
        circles.forEach((circle) => {
            // const yRotation =
            //     ((circle.getBoundingClientRect().top - mouseOffset.y) / 10) *
            //     -1;
            // const xRotation =
            //     ((circle.getBoundingClientRect().left - mouseOffset.x) / 10) *
            //     -1;
            const xCircleMouseOffset =
                (circle.getBoundingClientRect().left - mouseOffset.x) * -1;
            const yCircleMouseOffset =
                circle.getBoundingClientRect().top - mouseOffset.y;

            console.log('x ', xCircleMouseOffset);
            // console.log('y', yRotation);
            Object.assign(circle.style, {
                transform: `rotate3d(${xCircleMouseOffset > 0 ? '1' : '-1'}, ${
                    yCircleMouseOffset > 0 ? '1' : '-1'
                }, 0, ${xCircleMouseOffset / 10}deg)`,
            });
        });
    }, [mouseOffset]);

    return <div className="circles"></div>;
};

export default Circles;

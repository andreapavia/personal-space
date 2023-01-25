import React, { useEffect, useState } from 'react';
import './whoami.scss';

const Whoami = () => {
    const [labelAnimationStatus, setLabelAnimationStatus] = useState(
        Array.from('whoami_').map((char) => ({
            char: char,
            visible: false,
        }))
    );

    useEffect(() => {
        const body = document.querySelector('body');
        let i = 0;

        const changeBackgroundColorOnScroll = () => {
            if (window.scrollY > 0) {
                const offsetPercent =
                    100 / ((window.innerHeight / window.scrollY) * 10) / 10;
                body.style.backgroundColor = `rgba(0, 0, 0, ${offsetPercent})`;
            }
        };

        changeBackgroundColorOnScroll(body);

        document.addEventListener('scroll', () =>
            changeBackgroundColorOnScroll(body)
        );

        const interval = setInterval(() => {
            setLabelAnimationStatus((prevLabelAnimationStatus) => {
                console.log(prevLabelAnimationStatus);
                const newLabelAnimationStatus = [...prevLabelAnimationStatus];
                newLabelAnimationStatus[i] = {
                    ...newLabelAnimationStatus[i],
                    visible: true,
                };
                return newLabelAnimationStatus;
            });
            i++;

            if (i > labelAnimationStatus.length - 1) {
                clearInterval(interval);
            }
        }, 550);

        return () => {
            document.removeEventListener('scroll', () =>
                changeBackgroundColorOnScroll(body)
            );
        };
    }, []);

    return (
        <div className="whoami section">
            <div className="cmdline">
                <h2>
                    {labelAnimationStatus.map(({ char, visible }) => (
                        <span
                            key={char}
                            style={{
                                display: visible ? 'inline-block' : 'none',
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    );
};

export default Whoami;

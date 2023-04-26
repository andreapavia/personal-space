import React from 'react';
import './whoami.scss';

export const Whoami = () => {
    return (
        <>
            <section className="portone-default whoami">
                <div className="whoami__inner">
                    ` <h1>Ciao, io sono Andrea</h1>
                    <p>
                        I am a frontend developer based in Turin, Italy.
                        Currently coding with Hoverstate.
                    </p>
                    <p className="whoami__floater">
                        I chose frontend web developement ever since university,
                        and stuck with that since. I love and hate the React,
                        Redux, webpack stack, but I also had the chance to love
                        and curse other things, too.
                    </p>
                    <div className="whoami__weirdo"></div>
                    <h2>Got anything to discuss?</h2>
                    <div className="whoami__links">
                        <ul>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/andrea-francesco-pavia/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn <span>&#8599;</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/andreapavia"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github <span>&#8599;</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:a.pavia95@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    a.pavia95@gmail.com <span>&#8599;</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dribbble.com/dotpavia"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Dribbble <span>&#8599;</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

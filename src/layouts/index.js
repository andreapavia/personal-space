import React, { useEffect } from 'react';

// import Ball from './ball/Ball';
// import Header from './header/Header';
// import Circles from './circles/Circles';
import { Handlebar } from '../components/portOne/handlebar/Handlebar';
import { Transition } from '../components/transition/Transition';
import { PATH_HOME, PATH_WHOAMI, PATH_WORK } from '../lib/portOne/paths';

const handlebarPaths = [PATH_HOME, PATH_WHOAMI, PATH_WORK];

const Layout = ({ children, location }) => {
    const isInPortone = handlebarPaths.includes(
        children.props.location.pathname
    );

    useEffect(() => {
        if (isInPortone) {
            document.querySelector('body').classList.add('portone-background');
        } else {
            document
                .querySelector('body')
                .classList.remove('portone-background');
        }
    }, [isInPortone]);

    return (
        <>
            {/* <Ball /> */}
            {/* <Header /> */}
            {/* <Circles quantity={20} /> */}
            {handlebarPaths.includes(children.props.location.pathname) ? (
                <Handlebar location={location} />
            ) : null}
            <Transition location={location}>{children}</Transition>
        </>
    );
};

export default Layout;

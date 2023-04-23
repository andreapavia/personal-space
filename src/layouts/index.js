import React, { createRef } from 'react';

// import Ball from './ball/Ball';
// import Header from './header/Header';
// import Circles from './circles/Circles';
import { Handlebar } from '../components/portOne/handlebar/Handlebar';

const handlebarPaths = ['/port-one/', '/port-one/work/', '/port-one/whoami/'];

const Layout = ({ children }) => {
    const pageRef = createRef();

    return (
        <div ref={pageRef}>
            {/* <Ball /> */}
            {/* <Header /> */}
            {/* <Circles quantity={20} /> */}
            {handlebarPaths.includes(children.props.location.pathname) ? (
                <Handlebar pageRef={pageRef} />
            ) : null}
            {children}
        </div>
    );
};

export default Layout;

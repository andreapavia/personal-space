import React from 'react';

import Ball from './ball/Ball';
// import Header from './header/Header';
// import Circles from './circles/Circles';

const Layout = ({ children }) => {
    return (
        <>
            <Ball />
            {/* <Header /> */}
            {/* <Circles quantity={10} /> */}
            {children}
        </>
    );
};

export default Layout;

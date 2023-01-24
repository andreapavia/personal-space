import React from 'react';
import Ball from './ball/Ball';
// import Header from './header/Header';

const Layout = ({ children }) => {
    return (
        <>
            <Ball />
            {/* <Header /> */}
            {children}
        </>
    );
};

export default Layout;

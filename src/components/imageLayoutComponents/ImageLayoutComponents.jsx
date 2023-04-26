import React from 'react';
import './imageLayoutComponents.scss';

/* full screen single image */
export const LayoutFull = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return (
        <div className="image-layout">
            <div
                className="layout-full"
                style={{ background: `#${randomColor}` }}
            ></div>
        </div>
    );
};

/** one wide image on the left and two images on right column
 * @param orientation - column with two rows' side
 */
export const LayoutFullPlusRows = ({ orientation }) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return (
        <div className="image-layout image-layout--two-right-side">
            <div
                className="layout-left"
                style={{
                    background: `#${randomColor}`,
                    order: orientation === 'right' ? '0' : '2',
                }}
            ></div>
            <div
                className="layout-spacer"
                style={{ order: orientation === 'right' ? '0' : '1' }}
            ></div>
            <div className="layout-columns">
                <div
                    className="layout-row"
                    style={{ background: `#${randomColor}` }}
                ></div>
                <div
                    className="layout-row"
                    style={{ background: `#${randomColor}` }}
                ></div>
            </div>
        </div>
    );
};

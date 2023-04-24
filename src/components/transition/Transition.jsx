import React from 'react';
import {
    TransitionGroup,
    Transition as ReactTransition,
} from 'react-transition-group';

const timeout = 300;
const exitTimeout = 800;
const getTransitionStyles = {
    entering: {
        position: `absolute`,
        top: '100%',
        zIndex: 3,
    },
    entered: {
        position: 'absolute',
        transition: `top ${timeout}ms ease-in-out .1s`,
        top: '0',
        zIndex: 3,
    },
    exiting: {
        transition: `transform ${exitTimeout}ms ease-in-out, transform ${
            exitTimeout / 2
        }ms ease-in-out, border-radius ${
            exitTimeout / 2
        }ms ease-in-out, filter ${exitTimeout / 2}ms ease-in-out`,
        transform: 'scale(0.95)',
        filter: 'brightness(55%)',
        borderRadius: '20px',
        overflow: 'hidden',
        zIndex: 2,
    },
};

export class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props;

        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: exitTimeout,
                    }}
                    unmountOnExit={true}
                >
                    {(status) => (
                        <div
                            style={{
                                ...getTransitionStyles[status],
                            }}
                        >
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        );
    }
}

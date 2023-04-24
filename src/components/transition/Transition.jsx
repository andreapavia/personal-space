import React from 'react';
import {
    TransitionGroup,
    Transition as ReactTransition,
} from 'react-transition-group';
import { PATH_HOME } from '../../lib/portOne/paths';

const timeout = 300;
const exitTimeout = 800;
const getTransitionStyles = {
    entering: {
        position: `absolute`,
        overflow: 'hidden',
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

export class Transition extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollY: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        this.setState({ scrollY: window.scrollY });
    };

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextState.scrollY === this.state.scrollY ||
            location.pathname === PATH_HOME
        );
    }

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
                    mountOnEnter={true}
                    onExiting={(node) => {
                        node.style.position = 'fixed';
                        node.style.top = -1 * this.state.scrollY + 'px';
                    }}
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

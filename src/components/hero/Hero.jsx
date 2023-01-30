import React from 'react';
import './hero.scss';

const Blog = () => {
    // const [wordIndex, setWordIndex] = useState(0);
    // const wordArray = ['frontend developer', 'star wars fan', 'curious dude'];

    // useEffect(() => {
    //     setTimeout(() => {
    //         setWordIndex(wordIndex < 2 ? wordIndex + 1 : 0);
    //     }, 500);
    // }, [wordIndex]);

    return (
        <div className="blog section">
            <div className="hero">
                <div className="hero__textbar textbar">
                    <h1>
                        ANDREA <br />
                        FRANCESCO <br /> PAVIA
                        <br />
                        FRONTEND
                        <br /> DEVELOPER
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;

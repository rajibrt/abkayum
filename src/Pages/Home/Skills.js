import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Skills = () => {
    return (
        <div className='grid grid-cols-2 gap-4 mx-10 my-6'>
            {/* <div>
                <ProgressBar
                    completed={60}
                    bgColor="#e49610"
                    labelColor="#fbfbfb"
                    transitionDuration="500"
                    animateOnRender
                    maxCompleted={100}
                    customLabel="CSS"
                />
            </div>
            <div>
                <h2>CSS</h2>
                <ProgressBar
                    completed={90}
                    bgColor="#e49610"
                    labelColor="#fbfbfb"
                    transitionDuration="5000"
                    animateOnRender
                    maxCompleted={100}
                    customLabel="90%"
                />
            </div> */}
        </div>
    );
};

export default Skills;
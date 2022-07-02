import React from 'react';

import Fade from 'react-reveal/Fade';

interface ContentBarProps {
    title: string;
    children?: React.ReactNode
}

const ContentBar:React.FC<ContentBarProps> = (props) => {

    return (
        <div className = { "w-full min-h-screen flex flex-col" }>
            <div className = { "w-full py-4 sm:py-6 md:py-8 lg:py-12 bg-gradient-to-b from-zinc-400 to-zinc-500" }>
                <Fade up>
                    <div>
                        <h1 className="text-[0.35rem] lg:text-[0.5rem] text-amber-200 text-center hover:animate-pulse">{ props.title }</h1>
                    </div>
                </Fade>
            </div>
            <div className = { "w-full h-full flex flex-col bg-gradient-to-b from-zinc-500 to-zinc-400 items-stretch flex-grow" }>
                { props.children }  
            </div>
        </div>
    );
}

export default ContentBar;
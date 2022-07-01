import React from 'react';

import Fade from 'react-reveal/Fade';

interface ContentBarProps {
    title: string;
    children?: React.ReactNode
}

const ContentBar:React.FC<ContentBarProps> = (props) => {

    return (
        <div className = { "w-full" }>
            <div className = { "w-full flex border-0 px-4 py-12 align-center justify-center text-[0.5rem] text-amber-200 sm:text-[0.6rem] bg-gradient-to-b from-zinc-400 to-zinc-500" }>
                <Fade up>
                    <div>
                        <h1 className="hover:animate-pulse">{ props.title }</h1>
                    </div>
                </Fade>
            </div>
            <div className = { "w-full flex px-4 py-4 bg-gradient-to-b from-zinc-500 to-zinc-400" }>
                { props.children }  
            </div>
        </div>
    );
}

export default ContentBar;
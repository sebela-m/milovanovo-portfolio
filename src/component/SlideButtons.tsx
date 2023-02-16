import ProfileIcon from 'icons/ProfileIcon';
import ProjectsIcon from 'icons/ProjectsIcon';
import ResumeIcon from 'icons/ResumeIcon';
import SocialIcon from 'icons/SocialIcon';
import React from 'react';

interface SlideButtonsProps {
    slide: number;
    subslide: number;
    handleSlide: Function;
}

const SlideButtons:React.FC<SlideButtonsProps> = (props) => {
        
    return (
        <div className="flex flex-col justify-center py-2 px-2 md:mr-2 opacity-30 md:opacity-40 hover:opacity-80 items-center rounded-xl bg-zinc-100">
        
            <button
                className={`w-10 h-10 my-1 rounded-3xl flex justify-center items-center  ${props.slide === 0 ? "text-amber-700 bg-amber-200" : "text-zinc-700 bg-zinc-200 hover:text-amber-800 hover:bg-amber-100"}`}
                onClick = {(e) => { props.handleSlide(0, -1) }}
            >
                <ProfileIcon className="absolute h-5 fill-current" />
            </button>
            <button
                className={`w-10 h-10 my-1 rounded-3xl flex flex-col items-center justify-center  ${props.slide === 1 ? "text-amber-700 bg-amber-200" : "text-zinc-700 bg-zinc-200 hover:text-amber-800 hover:bg-amber-100"}`}
                
            >

                <div
                    className="absolute"
                >
                    <div
                        className="flex mb-1"
                    >
                        <button
                            className={`w-2 h-2 rounded-3xl ${props.subslide === 0 ? "bg-amber-600" : "bg-zinc-600 hover:bg-amber-500"}`}
                            onClick = {(e) => { props.handleSlide(1, 0) }} 
                        >
                            
                        </button>
                        <button
                            className={`w-2 h-2 rounded-3xl mx-1 ${props.subslide === 1 ? "bg-amber-600" : "bg-zinc-600 hover:bg-amber-500"}`}
                            onClick = {(e) => { props.handleSlide(1, 1) }}
                        >
                            
                        </button>
                        <button
                            className={`w-2 h-2 rounded-3xl ${props.subslide === 2 ? "bg-amber-600" : "bg-zinc-600 hover:bg-amber-500"}`}
                            onClick = {(e) => { props.handleSlide(1, 2) }}
                        >
                            
                        </button>
                    </div>
                    <div
                        className="flex justify-between"
                    >
                        <button
                            className={`w-2 h-2 rounded-3xl ${props.subslide === 3 ? "bg-amber-600" : "bg-zinc-600 hover:bg-amber-500"}`}
                            onClick = {(e) => { props.handleSlide(1, 3) }} 
                        >
                            
                        </button>

                        <button
                            className={`w-2 h-2 rounded-3xl ${props.subslide === 4 ? "bg-amber-600" : "bg-zinc-600 hover:bg-amber-500"}`}
                            onClick = {(e) => { props.handleSlide(1, 4) }}
                        >
                            
                        </button>
                    </div>
                    <div
                        className="flex mt-1"
                    >
                        <button
                            className={`w-2 h-2 rounded-3xl ${props.subslide === 5 ? "bg-amber-600" : "bg-zinc-600 hover:bg-amber-500"}`}
                            onClick = {(e) => { props.handleSlide(1, 5) }}
                        >
                            
                        </button>
                        <button
                            className={`w-2 h-2 rounded-3xl mx-1 ${props.subslide === 6 ? "bg-amber-600" : "bg-zinc-600 hover:bg-amber-500"}`}
                            onClick = {(e) => { props.handleSlide(1, 6) }}
                        >
                            
                        </button>
                        <button
                            className={`w-2 h-2 rounded-3xl ${props.subslide === 7 ? "bg-amber-600" : "bg-zinc-600 hover:bg-amber-500"}`}
                            onClick = {(e) => { props.handleSlide(1, 7) }}
                        >
                            
                        </button>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center"
                    onClick = {(e) => { props.handleSlide(1, 0) }} 
                >
                    <ResumeIcon className="absolute h-5 fill-current" />
                </div>
            </button>
            <button
                className={`w-10 h-10 my-1 rounded-3xl flex justify-center items-center ${props.slide === 2 ? "text-amber-700 bg-amber-200" : "text-zinc-700 bg-zinc-200 hover:text-amber-800 hover:bg-amber-100"}`}
                onClick = {(e) => { props.handleSlide(2, -1) }}
            >
                <ProjectsIcon className="absolute h-5 fill-current" />
            </button>
            <button
                className={`w-10 h-10 my-1 rounded-3xl flex justify-center items-center ${props.slide === 3 ? "text-amber-700 bg-amber-200" : "text-zinc-700 bg-zinc-200 hover:text-amber-800 hover:bg-amber-100"}`}
                onClick = {(e) => { props.handleSlide(3, -1) }}
            >
                <SocialIcon className="absolute h-5 fill-current" />
            </button>
        </div>
    );

};

export default SlideButtons;
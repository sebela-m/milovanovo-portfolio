import React, { useState } from 'react';

import goldenframe1 from '../assets/goldenframe1.png'; 
import goldenframe2 from '../assets/goldenframe2.png'; 
import goldenframe1Broken from '../assets/goldenframe1Broken.png'; 
import goldenframe2Broken from '../assets/goldenframe2Broken.png'; 

import cink1 from '../assets/cink1.mp3'; 
import cink2 from '../assets/cink2.mp3'; 
import cink3 from '../assets/cink3.mp3'; 
import cink4 from '../assets/cink4.mp3'; 
import cink5 from '../assets/cink5.mp3'; 
import cink6 from '../assets/cink6.mp3'; 
import cink7 from '../assets/cink7.mp3'; 
import break1 from '../assets/break1.mp3'; 

import Portrait, { PortraitHandle } from './Portrait'

import { useTranslation } from 'react-i18next';

import Fade from 'react-reveal/Fade';
import ResumeIcon from 'icons/ResumeIcon';
import ProjectsIcon from 'icons/ProjectsIcon';
import SocialIcon from 'icons/SocialIcon';

interface MenuBarProps {
    handleSlide: Function;
}

const MenuBar:React.FC<MenuBarProps> = (props) => {

    const { t } = useTranslation();
    
    const portraitRef =  React.useRef<PortraitHandle>(null); 

    const [portrait1ClickCount, setPortrait1ClickCount] = useState(0);
    const [portrait2ClickCount, setPortrait2ClickCount] = useState(0);
    
    const portrait1Cinks = Math.floor(Math.random() * 10) + 10;
    const portrait2Cinks = Math.floor(Math.random() * 10) + 10;

    let portrait1 = portrait1ClickCount < portrait1Cinks ? goldenframe1 : goldenframe1Broken;
    let portrait2 = portrait2ClickCount < portrait2Cinks ? goldenframe2 : goldenframe2Broken;

    const getCink = (cink: number) => {
        if(cink === 1) {
            return cink1;
        } 
        else if(cink === 2) {
            return cink2;
        } 
        else if(cink === 3) {
            return cink3;
        } 
        else if(cink === 4) {
            return cink4;
        } 
        else if(cink === 5) {
            return cink5;
        } 
        else if(cink === 6) {
            return cink6;
        } 
        else if(cink === 7) {
            return cink7;
        } 
        else {
            return null;
        }
    }

    const portrait1Click = () => {
        if(portrait1ClickCount + 1 < portrait1Cinks) {
            const randomCink = Math.floor(Math.random() * 7) + 1;
            const cinkSound = new Audio(getCink(randomCink));
            cinkSound.loop = false;
            cinkSound.play();
        } else if (portrait1ClickCount + 1 === portrait1Cinks) {
            if(portraitRef.current) {
                portraitRef.current.callSaySomething("10");
            }
            const cinkSound = new Audio(break1);
            cinkSound.loop = false;
            cinkSound.play();
        } else {
            const randomCink = Math.floor(Math.random() * 7) + 1;
            const cinkSound = new Audio(getCink(randomCink));
            cinkSound.loop = false;
            cinkSound.play();
        }
        setPortrait1ClickCount(portrait1ClickCount + 1);
    }

    const portrait2Click = () => {
        if(portrait2ClickCount + 1 < portrait2Cinks) {
            const randomCink = Math.floor(Math.random() * 7) + 1;
            const cinkSound = new Audio(getCink(randomCink));
            cinkSound.loop = false;
            cinkSound.play();
            const randomNumber = Math.floor(Math.random() * 10);
            if(portraitRef.current) {
                portraitRef.current.callSaySomething(randomNumber.toString());
            }
        } else if (portrait2ClickCount + 1 === portrait2Cinks) {
            if(portraitRef.current) {
                portraitRef.current.callSaySomething("10");
            }
            const cinkSound = new Audio(break1);
            cinkSound.loop = false;
            cinkSound.play();
        } else {
            const randomCink = Math.floor(Math.random() * 7) + 1;
            const cinkSound = new Audio(getCink(randomCink));
            cinkSound.loop = false;
            cinkSound.play();
        }
        setPortrait2ClickCount(portrait2ClickCount + 1);
        
    }


    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className = "w-full bg-white">
                <div className = "w-full max-w-2xl mx-auto px-4 mt-1 sm:mt-2 md:mt-4 lg:mt-8 xl:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Fade down>
                        <div id="RealPortrait" className = { "w-full flex portrait justify-center align-center"} onClick={portrait1Click}>
                            <img className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[320px] xl:h-[320px]" src={portrait1} alt="Portrait" />
                        </div>    
                        <div className = { "w-full flex justify-center align-center p-0 m-0" }>
                            <div className="bg-white w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[320px] xl:h-[320px]">
                                <Portrait ref={portraitRef} />
                            </div>
                            <img className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[320px] xl:h-[320px]" src={portrait2} width="160" height="160"  onClick={portrait2Click} alt="WebGLPortrait" />
                        </div>    
                    </Fade>
                </div>
            </div>

            <div className = "w-full bg-gradient-to-b from-white to-zinc-100">
                <div className="w-full flex justify-center px-4 py-2 sm:py-4 md:py-8">
                    <h1 className="text-center leading-[0.18rem] sm:leading-[0.26rem] md:leading-[0.6rem] lg:leading-[0.75rem] xl:leading-[0.9rem] opacity-50">
                        <Fade up>
                            <div>
                                <span className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.75rem] lg:text-[0.8rem] xl:text-[0.9rem] text-amber-200 text-semibold hover:animate-pulse">{t('app.title1')}</span>
                            </div>
                        </Fade>
                        <br />
                        <Fade down>
                            <div>
                                <span className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.80rem] lg:text-[0.85rem] xl:text-[0.95rem] text-amber-300 text-bold hover:animate-pulse">{t('app.title2')}</span>
                            </div>
                        </Fade>
                    </h1>
                </div>
            </div>

            <div className = "w-full bg-gradient-to-b from-white to-zinc-100 bg-gradient-to-b from-zinc-100 to-zinc-200">
                <div className = "w-full max-w-2xl mx-auto px-4 py-4 grid grid-cols-3 gap-2 md:gap-4" >
                    <Fade up>
                        <div className = "w-full flex justify-center">
                            <button 
                                    className = "transition-colors ease-in-out duration-500 w-full flex items-center justify-center rounded border-2 border-amber-100 hover:border-amber-800 hover:animate-pulse hover:shadow-2xl text-zinc-800 hover:text-amber-800 " 
                                    type="button" 
                                    onClick = { () => props.handleSlide(1, 0) }
                            >
                                <ResumeIcon className="mx-1 h-8 fill-current shrink-0 " />
                                <h3 className = "hidden sm:block  w-full mx-1 text-[0.2rem] md:text-[0.275rem] text-extrabold leading-6">{t('menu.cv')}</h3>
                            </button>
                        </div>
                        <div className = "w-full flex justify-center">
                            <button 
                                    className = "transition-colors ease-in-out duration-500 w-full flex items-center justify-center rounded border-2 border-amber-100 hover:border-amber-800 hover:animate-pulse hover:shadow-2xl text-zinc-800 hover:text-amber-800 " 
                                    type="button" 
                                    onClick = { () => props.handleSlide(2, -1) }
                            >
                                <ProjectsIcon className="mx-1 h-8 fill-current shrink-0 " />
                                <h3 className = "hidden sm:block w-full mx-1 text-[0.2rem] md:text-[0.275rem] text-extrabold leading-6">{t('menu.myProjects')}</h3>
                            </button>
                        </div>
                        <div className = "w-full flex justify-center">     
                            <button 
                                    className = "transition-colors ease-in-out duration-500 w-full flex items-center justify-center rounded border-2 border-amber-100 hover:border-amber-800 hover:animate-pulse hover:shadow-2xl text-zinc-800 hover:text-amber-800 " 
                                    type="button" 
                                    onClick = { () => props.handleSlide(3, -1) }
                            >
                                <SocialIcon className="mx-1 h-9 fill-current shrink-0 " />
                                <h3 className = "hidden sm:block w-full mx-1 text-[0.2rem] md:text-[0.275rem] text-extrabold leading-6">{t('menu.socialSites')}</h3>
                            </button>
                        </div>
                    </Fade>
                </div>
            </div>

            <div className="w-full flex-1 px-2 py-8 mt-auto bg-gradient-to-b from-zinc-200 to-zinc-400">
                
            </div>
        </div>
    );
}

export default MenuBar;
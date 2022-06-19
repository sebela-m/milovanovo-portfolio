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

// @ts-ignore
import Fade from 'react-reveal/Fade';

interface LeftBarProps {
    menuRef: React.RefObject<HTMLDivElement>;
    cvRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    socialRef: React.RefObject<HTMLDivElement>;
}

const LeftBar:React.FC<LeftBarProps> = (props) => {

    const { t } = useTranslation();
    
    const portraitRef =  React.useRef<PortraitHandle>(null); 

    const [portrait1ClickCount, setPortrait1ClickCount] = useState(0);
    const [portrait2ClickCount, setPortrait2ClickCount] = useState(0);
    
    const portrait1Cinks = Math.floor(Math.random() * 10) + 10;
    const portrait2Cinks = Math.floor(Math.random() * 10) + 10;

    let portrait1 = portrait1ClickCount < portrait1Cinks ? goldenframe1 : goldenframe1Broken;
    let portrait2 = portrait2ClickCount < portrait2Cinks ? goldenframe2 : goldenframe2Broken;

    const handleScroll = (ref : React.RefObject<HTMLDivElement>) => {
        if(ref.current) {
            ref.current.scrollIntoView(); 
        }
    }

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
        <div className = { "w-full"}>

            <div className = { "w-full px-4 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white" }>
                <Fade down>
                    <div id="RealPortrait" className = { "w-full flex portrait justify-center align-center"} onClick={portrait1Click}>
                        <img src={portrait1} width="160" height="160" alt="Portrait" />
                    </div>    
                    <div className = { "w-full flex justify-center align-center p-0 m-0" }>
                        <div className = "bg-white w-[160px]">
                            <Portrait ref={portraitRef} width={160} height={160} />
                        </div>
                        <img className = "absolute" src={portrait2} width="160" height="160"  onClick={portrait2Click} alt="WebGLPortrait" />
                    </div>    
                </Fade>
            </div>

            <div className="w-full flex justify-center px-4 py-8 bg-gradient-to-b from-white to-zinc-100">
                <h1 className="text-center leading-2 sm:leading-3">
                    <Fade up>
                        <div>
                            <span className="text-[0.7rem] text-amber-100 text-semibold">{t('app.title1')}</span>
                        </div>
                    </Fade>
                    <br />
                    <Fade down>
                        <div>
                            <span className="text-[0.75rem] text-amber-200 text-bold">{t('app.title2')}</span>
                        </div>
                    </Fade>
                </h1>
            </div>
            <div className = "w-full px-4 py-4 grid grid-cols-3 gap-4 bg-gradient-to-b from-zinc-100 to-zinc-200" >
                <Fade up>
                    <div className = "w-full flex justify-center align-center">
                        <button className = "w-full rounded border-2 border-amber-100 hover:animate-pulse hover:shadow-2xl" type="button" onClick = { () => handleScroll(props.cvRef) }>
                            <h3 className="text-[0.3rem] text-extrabold text-zinc-800 hover:text-amber-800 leading-8">{t('menu.cv')}</h3>
                        </button>
                    </div>
                    <div className = "w-full flex justify-center align-center">
                        <button className = "w-full rounded border-2 border-amber-100 hover:animate-pulse hover:shadow-2xl" type="button" onClick = { () => handleScroll(props.projectsRef) }>
                            <h3 className="text-[0.3rem] text-extrabold text-zinc-800 hover:text-amber-800 leading-8">{t('menu.myProjects')}</h3>
                        </button>
                    </div>
                    <div className = "w-full flex justify-center align-center">     
                        <button className = "w-full rounded border-2 border-amber-100 hover:animate-pulse hover:shadow-2xl" type="button" onClick = { () => handleScroll(props.socialRef) }>
                            <h3 className="text-[0.3rem] text-extrabold text-zinc-800 hover:text-amber-800 leading-8">{t('menu.socialSites')}</h3>
                        </button>
                    </div>
                </Fade>
            </div>
            <div className="w-full flex justify-center px-2 py-4 bg-gradient-to-b from-zinc-200 to-zinc-400 shadow-2xl">
                
            </div>
        </div>
    );
}

export default LeftBar;
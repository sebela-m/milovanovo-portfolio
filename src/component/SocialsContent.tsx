import React from 'react';

import { useTranslation } from 'react-i18next';

import Fade from 'react-reveal/Fade';
import LinkedInIcon from 'icons/LinkedInIcon';
import FacebookIcon from 'icons/FacebookIcon';
import TwitchIcon from 'icons/TwitchIcon';
import YoutubeIcon from 'icons/YoutubeIcon';

const SocialsContent:React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className = { "w-full" }>
            <div className = { "w-full flex border-0 px-4 py-12 align-center justify-center text-[0.5rem] text-amber-200 sm:text-[0.6rem] bg-gradient-to-b from-zinc-400 to-zinc-500" }>
                <Fade up>
                    <div>
                        <h1 className="hover:animate-pulse">{t('menu.socialSites')}</h1>
                    </div>
                </Fade>
            </div>
            <div className = { "w-full flex px-4 py-4 bg-gradient-to-b from-zinc-500 to-zinc-400" }>
                    <div className = "text-white">
                        <Fade up>
                            <a href="mailto:milansebela@gmail.com"><h3 className="text-[0.25rem] hover:text-amber-300">Email : milansebela@gmail.com</h3></a>
                        </Fade>
                        <br />
                        <br />
                        <Fade up>
                            <div className="flex align-center">
                                <a 
                                    className="transition-colors ease-in-out duration-500 hover:animate-pulse hover:shadow-2xl fill-current text-zinc-800 hover:text-amber-800" 
                                    href="https://www.linkedin.com/in/milan-%C5%A1ebela-759a05b8/"
                                >
                                    <LinkedInIcon className="h-16 mr-1" />
                                </a>
                                <a 
                                    className="transition-colors ease-in-out duration-500 hover:animate-pulse hover:shadow-2xl fill-current text-zinc-800 hover:text-amber-800" 
                                    href="https://www.facebook.com/MilovanShmitec"
                                >
                                    <FacebookIcon className="h-16 mx-1" />
                                </a>
                                <a 
                                    className="transition-colors ease-in-out duration-500 hover:animate-pulse hover:shadow-2xl fill-current text-zinc-800 hover:text-amber-800" 
                                    href="https://www.youtube.com/channel/UCyVJi8ZTxGri63i5FE43pSg"
                                >
                                    <YoutubeIcon className="h-16 mx-1" />
                                </a>
                                <a 
                                    className="transition-colors ease-in-out duration-500 hover:animate-pulse hover:shadow-2xl fill-current text-zinc-800 hover:text-amber-800" 
                                    href="https://www.twitch.tv/milovan_shmitec"
                                >
                                    <TwitchIcon className="h-16 ml-1" />
                                </a>
                            </div>
                        </Fade>
                    </div>
                
            </div>
        </div>
    );
}

export default SocialsContent;
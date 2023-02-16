import React, { Fragment } from 'react';

import { useTranslation } from 'react-i18next';

import Fade from 'react-reveal/Fade';
import LinkedInIcon from 'icons/LinkedInIcon';
import FacebookIcon from 'icons/FacebookIcon';
import TwitchIcon from 'icons/TwitchIcon';
import YoutubeIcon from 'icons/YoutubeIcon';
import Footer from './Footer';
import ContentBar from './ContentBar';

const SocialsContent:React.FC = () => {
    const { t } = useTranslation();

    return (
        <ContentBar
            title={t('menu.socialSites')}
        >
            <Fragment>
                <div className = { "w-full flex-1 flex flex-col items-center justify-center py-4 bg-gradient-to-b from-zinc-500 to-zinc-400" }>
                <Fade up>
                    <a href="mailto:milansebela@gmail.com">
                        <h3 className="py-4 lg:py-8 text-[0.16rem] sm:text-[0.2rem] md:text-[0.225rem] lg:text-[0.25rem] leading-8 text-white text-amber-300 hover:text-amber-800 text-center">Email : milansebela@gmail.com</h3>
                    </a>
                </Fade>
                <Fade up>
                    <div className="mx-auto py-8">
                        <a 
                            className="transition-colors ease-in-out duration-500 hover:animate-pulse fill-current text-zinc-800 hover:text-amber-800" 
                            href="https://www.linkedin.com/in/milan-%C5%A1ebela-759a05b8/"
                        >
                            <LinkedInIcon className="h-24" />
                        </a>
                        {
                            /* grid grid-cols-2 lg:grid-cols-4 gap-2 
                        <a 
                            className="transition-colors ease-in-out duration-500 hover:animate-pulse fill-current text-zinc-800 hover:text-amber-800" 
                            href="https://www.facebook.com/MilovanShmitec"
                        >
                            <FacebookIcon className="h-24" />
                        </a>
                        <a 
                            className="transition-colors ease-in-out duration-500 hover:animate-pulse fill-current text-zinc-800 hover:text-amber-800" 
                            href="https://www.youtube.com/channel/UCyVJi8ZTxGri63i5FE43pSg"
                        >
                            <YoutubeIcon className="h-24" />
                        </a>
                        <a 
                            className="transition-colors ease-in-out duration-500 hover:animate-pulse fill-current text-zinc-800 hover:text-amber-800" 
                            href="https://www.twitch.tv/milovan_shmitec"
                        >
                            <TwitchIcon className="h-24" />
                        </a>
                            */
                        }
                    </div>
                </Fade>
                </div>
                <div className = { "w-full px-4 py-4 bg-gradient-to-b from-zinc-400 to-zinc-500" }>
                </div>
                <div className = { "w-full px-4 py-4 bg-gradient-to-b from-zinc-500 to-zinc-400" }>
                </div>
                <Footer />
            </Fragment>
        </ContentBar>
    );
}

export default SocialsContent;
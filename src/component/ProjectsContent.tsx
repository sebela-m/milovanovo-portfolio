import React from 'react';

import { useTranslation } from 'react-i18next';

import honestWork from '../assets/HonestWork.jpg';

import Fade from 'react-reveal/Fade';
import ContentBar from './ContentBar';

const  ProjectsContent:React.FC = () => {
    const { t } = useTranslation();

    return (
        <ContentBar
            title={t('menu.myProjects')}
        >
            <div className = "max-w-2xl mx-auto text-zinc-800 text-xs md:text-base px-2 lg:px-0">
                <div className="w-full">
                    <Fade up>
                        <img className="mx-auto w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px]" alt="Honest work" width="240px" src={honestWork}></img>
                    </Fade>
                </div>
                <Fade up>
                    <h4 className="text-white leading-4 mt-2 sm:mt-3 md:mt-4"><b>{t('myProjects.portfolio.title')}</b></h4>
                </Fade>
                <Fade up>
                    <p className="text-justify pr-14 sm:pr-0">{t('myProjects.portfolio.description')} : <a className="text-amber-300 hover:text-amber-800" href="https://github.com/sebela-m/milovanovo-portfolio">github.com</a></p>
                </Fade>
                <Fade up>
                    <h4 className="text-white leading-6 mt-2 sm:mt-3 md:mt-4"><b>{t('myProjects.bachelor.title')}</b></h4>
                </Fade>
                <Fade up>
                    <p className="text-justify pr-14 sm:pr-0">{t('myProjects.bachelor.description')} <a className="text-amber-300 hover:text-amber-800" href="https://dspace.vsb.cz/handle/10084/118763">dspace.vsb.cz</a></p>
                </Fade>
                <Fade up>
                    <span>{t('myProjects.bachelor.appPart')} : <a className="text-amber-300 hover:text-amber-800" href="http://www.webglphysicslab.com/">www.webglphysicslab.com</a></span><br />
                </Fade>
                <Fade up>
                    <p>{t('myProjects.bachelor.textPart')} : <a className="text-amber-300 hover:text-amber-800" href="https://dspace.vsb.cz/bitstream/handle/10084/118763/SEB0064_FEI_B2647_2612R025_2017.pdf">Download pdf</a></p>
                </Fade>
                <Fade up>
                    <h4 className="text-white leading-5 mt-2 sm:mt-3 md:mt-4"><b>{t('myProjects.deadwebsite.title')}</b></h4>
                </Fade>
                <Fade up>
                    <p className="text-justify pr-14 sm:pr-0">{t('myProjects.deadwebsite.description')}</p>
                </Fade>
                <Fade up>
                    <span>{t('myProjects.deadwebsite.demo')} : </span><a className="text-amber-300 hover:text-amber-800" href="http://www.dead-website.com/">www.dead-website.com</a>
                </Fade>
                {
                /*
                <Fade up>
                    <span>{t('myProjects.deadwebsite.devlog')} :</span>
                </Fade>
                <br />
                <Fade up>
                    <div>
                        <iframe width="280" height="158" src="https://www.youtube.com/embed/WVpPMWpHoE8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Fade>
                */
                }
            </div>
        </ContentBar>
    );
}

export default ProjectsContent;
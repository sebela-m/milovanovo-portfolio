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
            <div className = "text-white">
                <div className="flex justify-center">
                    <Fade up>
                        <img alt="Honest work" width="240px" src={honestWork}></img>
                    </Fade>
                </div>
                <br />
                <Fade up>
                    <h3 className="text-[0.25rem] text-amber-300 leading-5">{t('myProjects.portfolio.title')}</h3>
                </Fade>
                <br />
                <Fade up>
                    <span>{t('myProjects.portfolio.description')} : <br /><a className="hover:text-amber-300" href="https://github.com/sebela-m/milovanovo-portfolio">github.com/sebela-m/milovanovo-portfolio</a></span>
                </Fade>
                <br />
                <br />
                <br />
                <Fade up>
                    <h3 className="text-[0.25rem] text-amber-300 leading-5">{t('myProjects.bachelor.title')}</h3>
                </Fade>
                <br />
                <Fade up>
                    <span>{t('myProjects.bachelor.description')} <a className="hover:text-amber-300" href="https://dspace.vsb.cz/handle/10084/118763">https://dspace.vsb.cz/handle/10084/118763</a></span>
                </Fade>
                <br />
                <Fade up>
                    <span>{t('myProjects.bachelor.appPart')} : <a className="hover:text-amber-300" href="http://www.WebGLphysicslab.com/">www.WebGLphysicslab.com</a></span>
                </Fade>
                <br />
                <Fade up>
                    <span>{t('myProjects.bachelor.textPart')} : <a className="hover:text-amber-300" href="https://dspace.vsb.cz/bitstream/handle/10084/118763/SEB0064_FEI_B2647_2612R025_2017.pdf">SEB0064_FEI_B2647_2612R025_2017.pdf</a></span>
                </Fade>
                <br />
                <br />
                <br />
                <Fade up>
                    <h3 className="text-[0.25rem] text-amber-300 leading-5">{t('myProjects.deadwebsite.title')}</h3>
                </Fade>
                <br />
                <Fade up>
                    <span>{t('myProjects.deadwebsite.description')}</span>
                </Fade>
                <br />
                <Fade up>
                    <span>{t('myProjects.deadwebsite.demo')} : </span><a className="hover:text-amber-300" href="http://www.dead-website.com/">www.dead-website.com</a>
                </Fade>
                <br />
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
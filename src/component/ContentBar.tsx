import React from 'react';

import { useTranslation } from 'react-i18next';

import dance from '../assets/dance.gif';

import twitchLogo from '../assets/twitch.png';
import linkedLogo from '../assets/linkedin.png';
import honestWork from '../assets/HonestWork.jpg';
import fbLogo from '../assets/fblogo.jpg';
import youtubeLogo from '../assets/youtube.png';

import Fade from 'react-reveal/Fade';

interface RightBarProps {
    currentMenu: number;
}

const RightBar:React.FC<RightBarProps> = (props) => {
    const { t } = useTranslation();

    return (
        <div className = { "w-full" }>
            <div className = { "w-full flex border-0 px-4 py-12 align-center justify-center text-[0.5rem] text-amber-200 sm:text-[0.6rem] bg-gradient-to-b from-zinc-400 to-zinc-500" }>
                <Fade up>
                    <div>
                        {
                            props.currentMenu === 1 &&
                            <h1>{t('menu.cv')}</h1>
                        }
                        {
                            props.currentMenu === 2 &&
                            <h1>{t('menu.myProjects')}</h1>
                        }
                        {
                            props.currentMenu === 3 &&
                            <h1>{t('menu.socialSites')}</h1>
                        }
                    </div>
                </Fade>
            </div>
            <div className = { "w-full flex px-4 py-4 bg-gradient-to-b from-zinc-500 to-zinc-400" }>
                {
                    props.currentMenu === 1 &&
                    <div className = "text-white">
                        <Fade up>
                            <h2 className="text-[0.4rem] text-amber-100 leading-10">{t('cv.name')}</h2>
                        </Fade>
                        <Fade up>
                            <h3 className="text-[0.2rem] text-amber-200 leading-10">{t('cv.role')}</h3>
                        </Fade>
                        <br />
                        <br />
                        <Fade up>
                            <h3 className="text-[0.25rem] text-amber-300 leading-5">{t('cv.technicalSkills')}</h3>
                        </Fade>
                        
                        <br />
                        <br />
                        <Fade up>
                            <h4 className="text-white text-bold leading-5">{t('cv.programmingLanguages')}</h4>
                        </Fade>
                        <div>

                        <div className="sticky top-0 py-10 float-right text-xs">
                            <span>1 - begginner</span><br />
                            <span>2 - intermediate</span><br />
                            <span>3 - advanced</span><br />
                            <span>4 - expert</span><br />
                        </div>
                        <br />
                        <Fade up>
                            <table>
                                <tr>
                                    <th>{t('cv.technology')}</th>
                                    <th>{t('cv.skillLevel')}</th>
                                </tr>
                                <tr>
                                    <td>Javascript</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Typescript</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Node.js</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Java</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>C, C++</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>C#</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td>3</td>
                                </tr>
                            </table>
                        </Fade>
                        <br />
                        <br />
                        <Fade up>
                            <h4 className="text-white leading-5">{t('cv.engines')}</h4>
                        </Fade>
                        <br />
                        <Fade up>
                            <table>
                                <tr>
                                    <th>{t('cv.technology')}</th>
                                    <th>{t('cv.skillLevel')}</th>
                                </tr>
                                <tr>
                                    <td>Three.js</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Unity</td>
                                    <td>3</td>
                                </tr>
                            </table>
                        </Fade>
                        <br /><br />
                        <Fade>
                            <h4 className="text-white leading-5">{t('cv.databases')}</h4>
                        </Fade>
                        <br />
                        <Fade up>
                            <table>
                                <tr>
                                    <th>{t('cv.technology')}</th>
                                    <th>{t('cv.skillLevel')}</th>
                                </tr>
                                <tr>
                                    <td>Oracle</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>PostgreSQL</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Firestore</td>
                                    <td>2</td>
                                </tr>
                            </table>
                        </Fade>
                        
                        <br /><br />
                        <Fade up>
                            <h4 className="text-white leading-5">{t('cv.graphics')}</h4>
                        </Fade>
                        <br />
                        <Fade up>
                            <table className="text-left">
                                <tr>
                                    <th>{t('cv.technology')}</th>
                                    <th>{t('cv.skillLevel')}</th>
                                </tr>
                                <tr>
                                    <td>Blender</td>
                                    <td rowSpan={10}><img alt="Trsající Milan" width="200px" src={dance}></img></td>
                                </tr>
                                <tr>
                                    <td>Photoshop</td>
                                </tr>
                                <tr>
                                    <td>Gimp</td>
                                </tr>
                                <tr>
                                    <td>Motion capture</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                        </Fade>
                        </div>
                        <br />
                        <Fade up>
                            <h3 className="text-[0.25rem] text-amber-300 leading-5">{t('cv.workExperiences')}</h3>
                        </Fade>
                        <br />
                        <Fade up>
                            <span><b>Consensus gaming s.r.o.</b></span><br />
                            <span>{t('cv.3.name')}</span><br />
                            <span>{t('cv.3.description')}</span><br />
                            <span>{t('cv.3.date')}</span><br />
                        </Fade>
                        <br />
                        <Fade up>
                            <span><b>CGI IT Czech Republic s.r.o.</b></span><br />
                            <span>{t('cv.2.name')}</span><br />
                            <span>{t('cv.2.description')}</span><br />
                            <span>{t('cv.2.date')}</span><br />
                        </Fade>
                        <br />
                        <Fade up>
                            <span><b>Tieto Czech s.r.o.</b></span><br />
                            <span>{t('cv.1.name')}</span><br />
                            <span>{t('cv.1.date')}</span><br />
                        </Fade>                        
                        <br />
                        <br />
                        <Fade up>
                            <h3 className="text-[0.25rem] text-amber-300 leading-5">{t('cv.education')}</h3>
                        </Fade>
                        <br />
                        <Fade up>
                            <span>{t('cv.education.1.schoolName')}</span><br />
                            <span>{t('cv.education.1.description')}</span><br />
                            <span>{t('cv.education.1.date')}</span><br />
                            <span>{t('cv.education.1.add')}</span><br />
                        </Fade>
                        <br />
                        <Fade up>
                            <span>{t('cv.education.2.schoolName')}</span><br />
                            <span>{t('cv.education.2.description')}</span><br />
                            <span>{t('cv.education.2.date')}</span><br />
                        </Fade>
                        <br />
                        <Fade up>
                            <h3 className="text-[0.25rem] text-amber-300 leading-5">{t('cv.other')}</h3>
                        </Fade>
                        <br />
                        <Fade up>
                            <span>{t('cv.driverLicense')}</span><br />
                        </Fade>
                    </div>
                }
                {
                    props.currentMenu === 2 &&
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
                            <span>{t('myProjects.portfolio.description')} : <br /><a href="https://github.com/sebela-m/milovanovo-portfolio">github.com/sebela-m/milovanovo-portfolio</a></span>
                        </Fade>
                        <br />
                        <br />
                        <br />
                        <Fade up>
                            <h3 className="text-[0.25rem] text-amber-300 leading-5">{t('myProjects.bachelor.title')}</h3>
                        </Fade>
                        <br />
                        <Fade up>
                            <span>{t('myProjects.bachelor.description')} <a href="https://dspace.vsb.cz/handle/10084/118763">https://dspace.vsb.cz/handle/10084/118763</a></span>
                        </Fade>
                        <br />
                        <Fade up>
                            <span>{t('myProjects.bachelor.appPart')} : <a href="http://www.WebGLphysicslab.com/">www.WebGLphysicslab.com</a></span>
                        </Fade>
                        <br />
                        <Fade up>
                            <span>{t('myProjects.bachelor.textPart')} : <a href="https://dspace.vsb.cz/bitstream/handle/10084/118763/SEB0064_FEI_B2647_2612R025_2017.pdf">SEB0064_FEI_B2647_2612R025_2017.pdf</a></span>
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
                            <span>{t('myProjects.deadwebsite.demo')} : </span><a href="http://www.dead-website.com/">www.dead-website.com</a>
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
                }
                {
                    props.currentMenu === 3 &&
                    <div className = "text-white">
                        <Fade up>
                            <h3 className="text-[0.25rem]">Email : milansebela@gmail.com</h3>
                        </Fade>
                        <br />
                        <br />
                        <Fade up>
                            <div className="flex align-center">
                                <a href="https://www.linkedin.com/in/milan-%C5%A1ebela-759a05b8/"><img alt="LinkedIn" width="64px" src={linkedLogo}></img></a>
                                <a href="https://www.facebook.com/MilovanShmitec"><img alt="Facebook Page" width="64px" src={fbLogo}></img></a>
                                <a href="https://www.youtube.com/channel/UCyVJi8ZTxGri63i5FE43pSg"><img alt="Youtube" width="64px" src={youtubeLogo}></img></a>
                                <a href="https://www.twitch.tv/milovan_shmitec"><img alt="Twitch" width="64px" src={twitchLogo}></img></a>
                            </div>
                        </Fade>
                    </div>
                }
            </div>
        </div>
    );
}

export default RightBar;
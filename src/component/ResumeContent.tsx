import React, { Fragment } from 'react';

import { useTranslation } from 'react-i18next';

import dance from '../assets/dance.gif';

import Fade from 'react-reveal/Fade';
import ContentBar from './ContentBar';

interface ResumeContentProps {
    subslide: number;
}

const ResumeContent:React.FC<ResumeContentProps> = (props) => {
    const { t } = useTranslation();

    return (
        <ContentBar
            title={t('menu.cv')}
        >
            <div className="mx-auto w-full max-w-2xl text-zinc-800 text-xs md:text-base px-2 lg:px-0">
                <Fade up>
                    <h2 className="text-[0.28rem] lg:text-[0.5rem] text-amber-100 leading-6 lg:leading-8 text-center mt-0 sm:mt-2 md:mt-4">{t('cv.name')}</h2>
                </Fade>
                <Fade up>
                    <h3 className="text-[0.12rem] lg:text-[0.215rem] text-amber-200 leading-6 lg:leading-8 text-center mb-0 sm:mb-2 md:mb-4">{t('cv.role')}</h3>
                </Fade>

                { (props.subslide >= 0 && props.subslide <= 3) &&
                    <Fade up>
                        <h3 className="text-[0.16rem] sm:text-[0.2rem] md:text-[0.225rem] lg:text-[0.25rem] text-amber-300 leading-5">{t('cv.technicalSkills')}</h3>
                    </Fade>
                }
                { props.subslide === 0 &&
                    <Fragment>
                        <Fade up>
                            <h4 className="text-white mb-2 mt-2 sm:mt-3 md:mt-4"><b>{t('cv.programmingLanguages')}</b></h4>
                        </Fade>
                        <Fade up>
                            <table
                                className="w-full text-left shadow-2xl rounded-xl"
                            >
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
                    </Fragment>
                }
                { props.subslide === 1 &&
                    <Fragment>
                        <Fade up>
                            <h4 className="text-white mb-2 mt-2 sm:mt-3 md:mt-4"><b>{t('cv.engines')}</b></h4>
                        </Fade>
                        <Fade up>
                            <table
                                className="w-full text-left shadow-2xl rounded-xl"
                            >
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
                    </Fragment>
                }
                { props.subslide === 2 &&
                    <Fragment>
                        <Fade>
                            <h4 className="text-white mb-2 mt-2 sm:mt-3 md:mt-4"><b>{t('cv.databases')}</b></h4>
                        </Fade>
                        <Fade up>
                            <table
                                className="w-full text-left shadow-2xl rounded-xl"
                            >
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
                    </Fragment>
                }   
                { props.subslide === 3 &&  
                    <Fragment>
                        <Fade up>
                            <h4 className="text-white mb-2 mt-2 sm:mt-3 md:mt-4"><b>{t('cv.graphics')}</b></h4>
                        </Fade>
                        <Fade up>
                            <table 
                                className="w-full text-left shadow-2xl rounded-xl"
                            >
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
                    </Fragment>
                }
                { props.subslide === 4 &&  
                    <div className="flex flex-col justify-center">
                        <Fade up>
                            <h3 className="text-[0.16rem] sm:text-[0.2rem] md:text-[0.225rem] lg:text-[0.25rem] text-amber-300 leading-5 mb-2 sm:mb-3 md:mb-4">{t('cv.workExperiences')}</h3>
                        </Fade>
                        <Fade up>
                            <span className="text-white leading-5"><b>Consensus gaming s.r.o.</b></span>
                            <span><b>{t('cv.3.name')}</b></span>
                            <p className="text-justify">{t('cv.3.description')}</p>
                            <span>{t('cv.3.date')}</span><br />
                        </Fade>
                        <Fade up>
                            <span className="text-white leading-5"><b>CGI IT Czech Republic s.r.o.</b></span>
                            <span><b>{t('cv.2.name')}</b></span>
                            <p className="text-justify">{t('cv.2.description')}</p>
                            <span>{t('cv.2.date')}</span><br />
                        </Fade>
                        <Fade up>
                            <span className="text-white leading-5"><b>Tieto Czech s.r.o.</b></span>
                            <span><b>{t('cv.1.name')}</b></span>
                            <span>{t('cv.1.date')}</span>
                        </Fade>     
                    </div>  
                }   
                { props.subslide === 5 &&               
                    <div className="flex flex-col justify-center">                
                        <Fade up>
                            <h3 className="text-[0.16rem] sm:text-[0.2rem] md:text-[0.225rem] lg:text-[0.25rem] text-amber-300 leading-5 mb-2 sm:mb-3 md:mb-4">{t('cv.education')}</h3>
                        </Fade>
                        <Fade up>
                            <span className="text-white"><b>{t('cv.education.1.schoolName')}</b></span>
                            <span><b>{t('cv.education.1.description')}</b></span>
                            <span>{t('cv.education.1.date')}</span>
                            <span>{t('cv.education.1.add')}</span><br />
                        </Fade>
                        <Fade up>
                            <span className="text-white"><b>{t('cv.education.2.schoolName')}</b></span>
                            <span><b>{t('cv.education.2.description')}</b></span>
                            <span>{t('cv.education.2.date')}</span>
                        </Fade>
                        <Fade up>
                            <h3 className="text-[0.16rem] sm:text-[0.2rem] md:text-[0.225rem] lg:text-[0.25rem] text-amber-300 leading-5 mt-2 sm:mt-3 md:mt-4">{t('cv.other')}</h3>
                        </Fade>
                        <Fade up>
                            <span>{t('cv.driverLicense')}</span>
                        </Fade>
                    </div>
                }
                
                { (props.subslide >= 0 && props.subslide <= 3) &&
                    <div className="top-0 py-10 float-right text-xs">
                        <span>1 - begginner</span><br />
                        <span>2 - intermediate</span><br />
                        <span>3 - advanced</span><br />
                        <span>4 - expert</span><br />
                    </div>
                }
            </div>
        </ContentBar>
    );
}

export default ResumeContent;
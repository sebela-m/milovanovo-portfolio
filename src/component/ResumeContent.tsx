import React from 'react';

import { useTranslation } from 'react-i18next';

import dance from '../assets/dance.gif';

import Fade from 'react-reveal/Fade';
import ContentBar from './ContentBar';

const ResumeContent:React.FC = () => {
    const { t } = useTranslation();

    return (
        <ContentBar
            title={t('menu.cv')}
        >
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
                    <span><b>{t('cv.education.1.schoolName')}</b></span><br />
                    <span>{t('cv.education.1.description')}</span><br />
                    <span>{t('cv.education.1.date')}</span><br />
                    <span>{t('cv.education.1.add')}</span><br />
                </Fade>
                <br />
                <Fade up>
                    <span><b>{t('cv.education.2.schoolName')}</b></span><br />
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
        </ContentBar>
    );
}

export default ResumeContent;
import React from 'react';

import CzLanguage from '../assets/czflag.png';
import EnLanguage from '../assets/enflag.png';

interface LanguageButtonProps {
    language: string;
    handleSettingsLanguageClick: Function;
}

const LanguageButton:React.FC<LanguageButtonProps> = (props) => {
        
    return (
        <div className="opacity-40 hover:opacity-80"onClick = {(e) => { props.handleSettingsLanguageClick() }}>
            <img width = "64" height = "64"
                    src = { props.language === "cs" ? CzLanguage : EnLanguage } 
                    alt = "Language" />
        </div>
    );

};

export default LanguageButton;
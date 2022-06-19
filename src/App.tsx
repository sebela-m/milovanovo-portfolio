import React, { useState, useRef } from 'react';

import Footer from './component/Footer';
import MenuBar from './component/MenuBar';
import ContentBar from './component/ContentBar';

import LanguageButton from './component/LanguageButton'

import i18n from './component/i18n';

const App:React.FC = () => {

  const [currentLang, setCurrentLang] = useState<string>(i18n.language);

  const menuRef = useRef<HTMLDivElement>(null);
  const cvRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  


  
  const handleLanguageChange = () => {
    if(i18n.language === "cs") {
        i18n.changeLanguage("en");
        setCurrentLang("en");
    } else {
        i18n.changeLanguage("cs");
        setCurrentLang("cs");
    }
};

  return (
    <div className = "w-full min-h-screen p-0 m-0 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900">
      <div className = { "max-w-2xl min-h-screen mx-auto flex flex-col border-x-4 border-double border-amber-100" } >
        <div ref={menuRef}>
          <MenuBar 
              menuRef ={ menuRef }
              cvRef ={ cvRef }
              projectsRef ={ projectsRef }
              socialRef={ socialRef } />
        </div>
        <div ref={cvRef}>
          <ContentBar currentMenu = {1} />
        </div>
        <div ref={projectsRef}>
          <ContentBar currentMenu = {2} />
        </div>
        <div ref={socialRef}>
          <ContentBar currentMenu = {3} />
        </div>
        <div className = "m-auto"></div>
        <Footer />
        <div className = "absolute right-0 top-0" >
          <LanguageButton language = { currentLang }
              handleSettingsLanguageClick = { handleLanguageChange } />
        </div>
      </div>
    </div>
  );
}

export default App;
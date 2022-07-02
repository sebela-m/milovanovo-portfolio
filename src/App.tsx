import React, { useState, useEffect, Fragment } from 'react';

import MenuBar from './component/MenuBar';

import LanguageButton from './component/LanguageButton'

import i18n from './component/i18n';
import ResumeContent from 'component/ResumeContent';
import ProjectsContent from 'component/ProjectsContent';
import SocialsContent from 'component/SocialsContent';
import SlideScreen from 'component/SlideScreen';
import SlideButtons from 'component/SlideButtons';

const App:React.FC = () => {

  const [currentLang, setCurrentLang] = useState<string>(i18n.language);
  
  const [slide, setSlide] = useState<number>(0);
  const [subslide, setSubslide] = useState<number>(0);

  useEffect(() => {
      const onScroll = () => { scrollFunction() };
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollFunction() {
    if ((window.pageYOffset >= 0)
        && (window.pageYOffset < 1000)) {
      setSlide(0);
      setSubslide(-1);
    }
    else if ((window.pageYOffset >= 1000)
        && (window.pageYOffset < 2000)) {
      setSlide(1);
      setSubslide(0);
    }
    else if ((window.pageYOffset >= 2000)
        && (window.pageYOffset < 3000)) {
      setSlide(1);
      setSubslide(1);
    }
    else if ((window.pageYOffset >= 3000)
        && (window.pageYOffset < 4000)) {
      setSlide(1);
      setSubslide(2);
    }
    else if ((window.pageYOffset >= 4000)
        && (window.pageYOffset < 5000)) {
      setSlide(1);
      setSubslide(3);
    }
    else if ((window.pageYOffset >= 5000)
        && (window.pageYOffset < 6000)) {
      setSlide(1);
      setSubslide(4);
    }
    else if ((window.pageYOffset >= 6000)
        && (window.pageYOffset < 7000)) {
      setSlide(1);
      setSubslide(5);
    } 
    else if ((window.pageYOffset >= 7000)
        && (window.pageYOffset < 8000)) {
      setSlide(2);
      setSubslide(-1);
    } 
    else if ((window.pageYOffset >= 8000)
        && (window.pageYOffset < 9000)) {
      setSlide(3);
      setSubslide(-1);
    } 
  }

  const handleLanguageChange = () => {
    if(i18n.language === "cs") {
        i18n.changeLanguage("en");
        setCurrentLang("en");
    } else {
        i18n.changeLanguage("cs");
        setCurrentLang("cs");
    }
  };

  const handleSlide = (slideNumber : number, subslideNumber : number) => {
    if (slideNumber === 0) {
      window.scrollTo(0, 0);
    }
    if (slideNumber === 1) {
      if(subslideNumber === 0) {
        window.scrollTo(0, 1000);
      }
      else if(subslideNumber === 1) {
        window.scrollTo(0, 2000);
      }
      else if(subslideNumber === 2) {
        window.scrollTo(0, 3000);
      } 
      else if(subslideNumber === 3) {
        window.scrollTo(0, 4000);
      } 
      else if(subslideNumber === 4) {
        window.scrollTo(0, 5000);
      } 
      else if(subslideNumber === 5) {
        window.scrollTo(0, 6000);
      } 
    }
    if (slideNumber === 2) {
      window.scrollTo(0, 7000);
    }
    if (slideNumber === 3) {
      window.scrollTo(0, 8000);
    } 
    setSlide(slideNumber);
    setSubslide(subslideNumber);
  };

  return (
    <Fragment>
      <div className = "w-full p-0 m-0">
          <SlideScreen
            order={0 - slide }
          >
             <MenuBar 
                 handleSlide={handleSlide} />
          </SlideScreen>
          <SlideScreen
            order={1 - slide}
          >
            <ResumeContent subslide={subslide} />
          </SlideScreen>
          <SlideScreen
            order={2 - slide}
          >
            <ProjectsContent />
          </SlideScreen>
          <SlideScreen
            order={3 - slide}
          >
            <SocialsContent />
          </SlideScreen>
          <div className = "fixed top-0 right-0 z-50 flex flex-col z-50 justify-between" >
            <LanguageButton language = { currentLang }
                handleSettingsLanguageClick = { handleLanguageChange } />
          </div>
          <div className = "fixed sm:h-full top-16 md:top-0 right-0 mr-1 z-40 flex items-center" >
            <SlideButtons 
              slide={slide}
              subslide={subslide}
              handleSlide={handleSlide}
            />
          </div>
      </div>
      <div className = "h-[10000px] z-10">
      </div>
      
    </Fragment>

  );
}

export default App;

// Environment
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Components
import { ProfileImages, IntroText, Splitter, NavigationTab, ResumeBox, HardSkills, BackgroundExperience, FeaturedWork, Portafolio } from './components';

// CSS
import "./index.scss"




gsap.registerPlugin(ScrollTrigger);



function App() {







  return (
    <div>

        <div className='visible-header'>
          <ProfileImages />
        </div>
        <div className='not-visible-header'>
          <ProfileImages />
        </div>

        <div className='overlap'>
          <IntroText />
          <Splitter />

          <NavigationTab />
          <Splitter />

          <ResumeBox />
          <Splitter />

          <HardSkills />
          <Splitter />

          <BackgroundExperience />
          <Splitter />

          <FeaturedWork />
          <Splitter />

          <Portafolio />
          {/* <Splitter /> */}

      </div>

    </div>
  );
}

export default App;

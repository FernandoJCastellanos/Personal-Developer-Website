// Environment
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Components

  
  
  

  
  
  
  
const HardSkills = () => {

  const elementsHardSkillsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    elementsHardSkillsRef.current.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0,
          scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'center 95%',
            end: 'center 5%',
            toggleActions: 'play reverse play reverse',
            // markers: true
          },
        }
      );
    });
  }, []);



    return (
      <div id="hard-skills">

        <div className="skills-title-container">
          <p className="skills-title">
            Hard Skills
          </p>
        </div>

        <div className="skill-master-container"> 
          <div className="skill-container-1">
            <p className="skill-text">
              Frontend Hard Skills
            </p>
            <ul class="skills-list">
              <li ref={(el) => (elementsHardSkillsRef.current[0] = el)}>HTML</li>
              <li ref={(el) => (elementsHardSkillsRef.current[1] = el)}>CSS</li>
              <li ref={(el) => (elementsHardSkillsRef.current[2] = el)}>Javascript</li>
              <li ref={(el) => (elementsHardSkillsRef.current[3] = el)}>React</li>
              <li ref={(el) => (elementsHardSkillsRef.current[4] = el)}>React Native</li>
              <li ref={(el) => (elementsHardSkillsRef.current[5] = el)}>Typescript</li>
              <li ref={(el) => (elementsHardSkillsRef.current[6] = el)}>Redux</li>
              <li ref={(el) => (elementsHardSkillsRef.current[7] = el)}>Git</li>
              <li ref={(el) => (elementsHardSkillsRef.current[8] = el)}>SASS</li>
              <li ref={(el) => (elementsHardSkillsRef.current[9] = el)}>Lottie</li>
              <li ref={(el) => (elementsHardSkillsRef.current[10] = el)}>Bootstrap</li>
              <li ref={(el) => (elementsHardSkillsRef.current[11] = el)}>GitHub</li>
            </ul>
          </div>
          <div className="skill-container-2">
            <p className="skill-text">
              3D/2D Motion Design Skills
            </p>
            <ul class="skills-list">
              <li ref={(el) => (elementsHardSkillsRef.current[12] = el)}>Cinema 4D</li>
              <li ref={(el) => (elementsHardSkillsRef.current[13] = el)}>Houdini</li>
              <li ref={(el) => (elementsHardSkillsRef.current[14] = el)}>Redshift Engine</li>
              <li ref={(el) => (elementsHardSkillsRef.current[15] = el)}>Substance Painter</li>
              <li ref={(el) => (elementsHardSkillsRef.current[16] = el)}>Substance Designer</li>
              <li ref={(el) => (elementsHardSkillsRef.current[17] = el)}>Marvelous Designer</li>
              <li ref={(el) => (elementsHardSkillsRef.current[18] = el)}>After Effects</li>
              <li ref={(el) => (elementsHardSkillsRef.current[19] = el)}>Illustrator</li>
              <li ref={(el) => (elementsHardSkillsRef.current[20] = el)}>Photoshop</li>
              <li ref={(el) => (elementsHardSkillsRef.current[21] = el)}>Premiere</li>
            </ul>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default HardSkills;
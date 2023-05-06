// Environment
import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';

// Components

  
  import PP from "../assets/foto.png"
  import happy from "../assets/happyface.json"

  // CSS
  import "../index.scss"
  

  
  
const ProfileImages = () => {


  const animationRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  console.log(animationRef)

  function handleClick() {
    if (animationRef.current) {
      animationRef.current.goToAndPlay(0);
      setIsPlaying(true);
    }else{
      console.log('The div was clicked!');
    }
  }
  function handleAnimationComplete() {
    setIsPlaying(false);
  }


    return (
      <div className='profile-div'>

        <div className='happy-face' onClick={handleClick}>
 
          <Lottie loop={false} animationData={ happy } autoplay={isPlaying}
        onComplete={handleAnimationComplete}
        ref={animationRef}/>

        </div>



        <div class="foto-div">
          <picture>
              <img class="foto-img" src={PP} alt="Fernando Castellanos" />
          </picture>
        </div>

      </div>
    );
  }
  
  // this gets exported to app
  export default ProfileImages;
  
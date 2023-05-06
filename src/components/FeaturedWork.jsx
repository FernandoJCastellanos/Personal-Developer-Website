
// Environment
import React, {useState} from "react";
import LearnMore from "./LearnMore";

// Components

  
  import arrow from "../assets/play-solid.svg"
  
  
  
  
  
  
  
  
const FeaturedWork = () => {




  // Feature Box 1  // Feature Box 1  // Feature Box 1  // Feature Box 1  // Feature Box 1

  const [videoPlayer1, setVideoPlayer1] = useState(false);
  const toggleVideo1 = () => {
    setVideoPlayer1(!videoPlayer1)
  }
  // Button
  const [isVisible1, setIsVisible1] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  // Feature Box 2  // Feature Box 2  // Feature Box 2  // Feature Box 2  // Feature Box 2 

  const [videoPlayer2, setVideoPlayer2] = useState(false);
  const toggleVideo2 = () => {
    setVideoPlayer2(!videoPlayer2)
  }
    // Button
  const [isVisible2, setIsVisible2] = useState(false);
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  // Feature Box 2  // Feature Box 2  // Feature Box 2  // Feature Box 2  // Feature Box 2

  const [videoPlayer3, setVideoPlayer3] = useState(false);
  const toggleVideo3 = () => {
    setVideoPlayer3(!videoPlayer3)
  }
    // Button
  const [isVisible3, setIsVisible3] = useState(false);
  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };




// Feature 1

const title1="Own Personal Art Gallery"
const img1 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Personal.jpg?alt=media&token=3a109d32-f826-4c15-91ce-160e9f8c8c9d"
const video1 = "https://www.youtube.com/embed/eirOLkjPSoc"
const techUsed1= "HTML, CSS, JavaScript"
const accomplishements1="I built the website I've always wanted for my Art Gallery"
const GitHub1="https://github.com/FernandoJCastellanos/Personal-Art-Website"

// Feature 2
const title2="We Build it, You Cook it!"
const img2 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/recipe%20app.png?alt=media&token=e628fe15-5fc7-4531-9230-47f04fac1578"
const video2 = "https://www.youtube.com/embed/cnwgg7GMEhA"
const techUsed2= "React, Typescript, SASS"
const accomplishements2="I've always wanted to know how to turn the dang lights off these websites"
const GitHub2="https://github.com/FernandoJCastellanos/Recipe-Site"

// Feature 3
const title3="Keeping up with the CryptoBros"
const img3 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/cryptoverse%20foto.png?alt=media&token=c506e6a9-4c73-45f2-bac0-4594be589912"
const video3 = "https://www.youtube.com/embed/KtX6ak9g2Hg"
const techUsed3= "React, Redux and Typescript"
const accomplishements3="Got to practice some Redux, learned to wire 3rd party APIs into my site"
const GitHub3="https://github.com/FernandoJCastellanos/CryptoVerse"

    return (
    <div id="featured-work">
        <div>
          <p className= "feature-title">
            Featured Work
          </p>

        </div>

        <div className="feature-container">
        


          <div className="featured-row">


            <div className="feature-row-insert">

              <div className= "feature-box">

                <p className="feature-name-featured">
                  {title1}
                </p>

                <div className="video-box" onClick={toggleVideo1}>
                  <img className="arrow" src={arrow} alt="arrow"/>
                  <img className={`thumbnail ${videoPlayer1 ? 'hidden' : 'visbile'}`} alt="VideoImage" src={img1} />
                  <iframe className={`iframe-video ${videoPlayer1 ? 'visible' : 'hidden'}`}  width="100%" height="100%" src={video1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>

                <button className="feature-button" onClick={toggleVisibility1}>Show More</button>
                <div className={`content ${isVisible1 ? 'show' : 'hide'}`}>
                  <LearnMore
                  techUsed={techUsed1}
                  accomplishment={accomplishements1}
                  GitHub={GitHub1}
                  />
                </div>
              </div>
            </div>



            <div className="feature-row-insert">
              <div className= "feature-box">

                <p className="feature-name-featured">
                  {title2}
                </p>    

                <div className="video-box" onClick={toggleVideo2}>
                  <img className="arrow" src={arrow} alt="arrow"/>
                  <img className={`thumbnail ${videoPlayer2 ? 'hidden' : 'visbile'}`} alt="VideoImage" src={img2} />
                  <iframe className={`iframe-video ${videoPlayer2 ? 'visible' : 'hidden'}`}  width="100%" height="100%" src={video2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>   
        
                <button className="feature-button" onClick={toggleVisibility2}>Show More</button>
                <div className={`content ${isVisible2 ? 'show' : 'hide'}`}>
                  <LearnMore
                  techUsed={techUsed2}
                  accomplishment={accomplishements2}
                  GitHub={GitHub2}
                  />
                </div>

              </div>
            </div>


            <div className="feature-row-insert">
              <div className= "feature-box">

                <p className="feature-name-featured">
                  {title3}
                </p>  

                <div className="video-box" onClick={toggleVideo3}>
                  <img className="arrow" src={arrow} alt="arrow"/>
                  <img className={`thumbnail ${videoPlayer3 ? 'hidden' : 'visbile'}`} alt="VideoImage" src={img3} />
                  <iframe className={`iframe-video ${videoPlayer3 ? 'visible' : 'hidden'}`}  width="100%" height="100%" src={video3} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>         
        
                <button className="feature-button" onClick={toggleVisibility3}>Show More</button>
                <div className={`content ${isVisible3 ? 'show' : 'hide'}`}>
                  <LearnMore
                  techUsed={techUsed3}
                  accomplishment={accomplishements3}
                  GitHub={GitHub3}
                  />
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  
    );
  }
  
  export default FeaturedWork;
  
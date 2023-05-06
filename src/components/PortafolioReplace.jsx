  // Portafolio Box replace 

  const [videoPlayerreplace, setVideoPlayerreplace] = useState(false);
  const toggleVideoreplace = () => {
    setVideoPlayerreplace(!videoPlayerreplace)
  }
  // Button
  const [isVisiblereplace, setIsVisiblereplace] = useState(false);

  const toggleVisibilityreplace = () => {
    setIsVisiblereplace(!isVisiblereplace);
  };


  // Portafolio replace  // Portafolio replace  // Portafolio 2replace  // Portafolio replace  // Portafolio replace  // Portafolio replace  // Portafolio replace  // Portafolio replace

const titlereplace="Dog chill Dog world"
const imgreplace = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Tindog.png?alt=media&token=79260380-1974-4b81-ba7d-45e6563afa62"
const videoreplace = "https://www.youtube.com/embed/xQx6QH6_z9M"
const techUsedreplace= "HTML, CSS, JavaScript"
const accomplishementsreplace="My first website built in Vanilla"
const GitHubreplace="https://github.com/FernandoJCastellanos/Tindog"








          {/* Portafolio replace */}
          {/* replace */}

          <div className= "feature-box">
                <div className="video-box" onClick={toggleVideoreplace}>
                  <img className="arrow" src={arrow} alt="arrow"/>
                  <img className={`thumbnail ${videoPlayerreplace ? 'hidden' : 'visbile'}`} alt="VideoImage" src={imgreplace} />
                  <iframe className={`iframe-video ${videoPlayerreplace ? 'visible' : 'hidden'}`}  width="100%" height="100%" src={videoreplace} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>
                <p className="feature-name">
                  {titlereplace}
                </p>
                <button className="feature-button" onClick={toggleVisibilityreplace}>Show More</button>
                <div className={`content ${isVisiblereplace ? 'show' : 'hide'}`}>
                  <LearnMore
                  techUsed={techUsedreplace}
                  accomplishment={accomplishementsreplace}
                  GitHub={GitHubreplace}
                  />
                </div>
            </div>
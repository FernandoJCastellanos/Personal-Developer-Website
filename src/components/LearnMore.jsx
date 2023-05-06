
// Environment



// Components

  
  
  
  
// TypeScript

 
  
  
  
  
  
const LearnMore = ({videoSource, techUsed, accomplishment, GitHub}) => {
    return (
      <div className="learnmore-master-container">




        <div>
            <p className="learn-more-title">
                Tech Used:
            </p>
            <p>
                {techUsed}
            </p>
        </div>

        <div>
            <p className="learn-more-title">
                Project Goal:
            </p>
            <p>
                {accomplishment}
            </p>
        </div>

        <div>
            <p className="learn-more-title">
                GitHub Repo:
            </p>
            <a href={GitHub} target="_blank" rel="noopener noreferrer">
                Link
            </a>
        </div>

  
      </div>
    );
  }
  
  export default LearnMore;
  
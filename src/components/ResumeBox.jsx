// Environment


// Components

  
// Icons
  import email from "../assets/icons/email-icon.svg"
  import linkedin from "../assets/icons/linkedin-icon.svg"
  import cv from "../assets/icons/cv-icon.svg"    
  import website from "../assets/icons/website-icon.svg"  
  import location from "../assets/icons/location-icon.svg"  
  
  
  
const ResumeBox = () => {
    return (
      <div className="Resume-Container" id="contact">

        {/* <!-- email --> */}
            <a href="mailto:fernandojcastellanos@gmail.com">
                <div class="icon-div-top">

                        <img class="email-icon" src={email} alt="e-mail-icon" />

                    <p class="resume-text">
                        fernandojcastellanos@gmail.com
                    </p>
                </div>
            </a>


        {/* <!-- linkedin --> */}
            <a href= "https://www.linkedin.com/in/fernando-castellanos-03a484160/" target="_blank" rel="noopener noreferrer">
                <div class="icon-div">

                        <img class="linkedin-icon" src={linkedin} alt="Linkedin" />

                    <p class="resume-text">
                        Fernando Castellanos
                    </p>
                </div> 
            </a>

        {/* <!-- cv --> */}
            <a href= "https://drive.google.com/drive/u/0/folders/1uE5OWcPOL0JSjALYUvhh6eH9MhjYgTwX" target="_blank" rel="noopener noreferrer">
                <div class="icon-div">

                        <img class="cv-icon" src={cv} alt="CV" />

                    <p class="resume-text">
                        Curriculum Vitae
                    </p>
                </div>
            </a>


        {/* <!-- location --> */}
            <div class="icon-div">
                <picture>
                    <img class="location-icon" src={location} alt="Location" />
                </picture>
                <p class="resume-text">
                    Dominican Republic
                </p>
            </div>
    
    

        {/* <!-- website --> */}
            <a href= "FernandoJC.com" target="_blank" rel="noopener noreferrer">
                <div class="icon-div">
                    <picture>
                        <img class="website-icon" src={website} alt="Website" />
                    </picture>
                    <p class="resume-text">
                        FernandoJC.com
                    </p>
                </div>
            </a>

      </div>
    );
  }
  
  // exported to app
  export default ResumeBox;
  
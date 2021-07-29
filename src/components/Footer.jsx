import React from "react";

function Footer(){

    const femLink = "https://www.frontendmentor.io?ref=challenge";
    const profileLink = "https://github.com/not-a-scam";

    return <footer>
    <div className="attribution">
      Challenge by <a href={femLink} target="_blank" rel="noreferrer">Frontend Mentor</a>. 
      Coded by <a href={profileLink}>notascam</a>.
    </div>
  </footer>;
}

export default Footer;

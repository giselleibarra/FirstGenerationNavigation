const homepage = () => {
  return (
    <main className="homePage">
      <div className="home-container">
        <div className="homeContent">
          <div className="home-image-section">
            <div className="image-background"></div>

            <span className="sparkle sparkle-one">✦</span>
            <span className="sparkle sparkle-two">✦</span>
            <img
              src="/graduation.jpg"
              alt="Students celebrating their graduation"
              className="graduationImg"
            />

            <div className="belong-label">
              You belong here!
            </div>
          </div>
          
          <div className="home-about-section">
            <div className="about-decoration"></div>
            <div className="aboutBox">
              <div className="about-accent"></div>
              <h1>About First Generation Navigation</h1>
              <p>
                Welcome to First Generation Navigation! The college application process can be very overwhelming for many students, especially those who are the first in their families to pursue higher education.
                First generation students often face many barriers when going through this application process including limited access to guidance, unfamiliarity with terminology used associated with college, 
                and difficulty finding information about applications, scholarships, and standardized testing. The goal of First Generation Navigation is to reduce these barriers through a user centered web 
                application that organizes trusted resources while also providing simplified explanations and structured guidance through the lens of a first generation student who has also dealt with and navigated through these challenges. 
              </p>
            </div>
          </div>
          
        </div>

        <div className="disclaimer-box">
          <div className="disclaimer-icon">☆</div>

          <p>
            <strong>Disclaimer:</strong> First Generation Navigation is an informational resource designed to help first-generation students navigate the college application process. 
            While we strive to provide accurate and helpful information, application requirements, 
            deadlines, and financial aid opportunities may change. We encourage students to verify all information through official college, scholarship, and financial aid websites.
          </p>
        </div>
      </div>
    </main>
  )
}

export default homepage
import gamingworld from "../images/gaming.jpg"
import gamingworld2 from "../images/gaming2.jpg"
import studynest from "../images/studynest.jpg"
import studynest2 from "../images/studynest2.jpg"
import card from "../images/card.jpg"
const Projects = () => {
  return (
    <div className="main">
      <h1>Gaming World</h1>
      <div className="content">
        <div className="img1">
        <img src={gamingworld} alt="gaming" className="project" />
        <img src={gamingworld2} alt="gaming" className="project" />
        </div>
        <div className="text">
          <p>🎮 Gaming World - A YouTube Gaming hub Website Gaming World is a beginner-friendly front-end project designed to showcase YouTube gaming content with a vibrant, retro-gaming-inspired UI. Built using HTML and CSS, this website serves as a landing page for a gaming channel featuring gameplay videos, shorts, and interactive elements.
            <br /><br />
                📁 Features 🎥 Embedded YouTube videos and shorts categorized into sections.
            <br /><br />
              🔧 The project is fully responsive and built with media queries to ensure a smooth and consistent experience across all screen sizes from mobile phones📱 to large desktops.💻
            <br /><br />
                🚀 Animated space-invader-style rocket with laser effect on hover.
            <br />
                  🌌 Responsive design with a retro-themed, neon-styled aesthetic.
            <br />
                 🕹️ Custom navigation bar and visual effects to enhance interactivity.
            <br /><br />
                  🧱 Tech Stack HTML5 – Structure
            <br /> 
                   CSS3 – Styling and animations
            <br /><br />
                   📌 What I Learned Structuring multi-section layouts using HTML
            <br /> <br />
                   • Creating animated and responsive designs with CSS
            <br />
                   • Embedding and customizing YouTube media content
            <br />
                   • Using creative visuals and fonts for gaming-themed UI
          </p>
          <a href="https://nikhilthakur121.github.io/Gamingworld/" className="btn">Preview</a>
      </div>
      </div>
      <h1>StudyNest</h1>
      <div className="content">
      <div className="img2">
        <img src={studynest} className="project" />
        <img src={studynest2} className="project" />
      </div>
      <div className="text">
        <p> 
          🏫 StudyNest is a modern and responsive web platform designed to make learning simple and effective. It provides a clean user interface, helpful sections, and a smooth user experience for students and educators.
           <br /><br />
             ✨ Features
             <br /> <br />
                   •Fully responsive and mobile-friendly design
                   <br />
                   •Simple and attractive UI
                   <br />
                   •Sections like Home, About, Features, Contact
                   <br />
                   •Smooth navigation and layout
                   <br />
                   •Perfect for showcasing educational or learning-based projects
                   <br /> <br />
                  🛠️ Tech Stack
                   <br />
                    •HTML5
                    <br />
                    •CSS3
                    <br />
                    •JavaScript
                    <br />
                    •GitHub Pages for deployment
                    </p>
      <a href="https://nikhilthakur121.github.io/StudyNest/" className="btn">Preview</a>
      </div>
    </div>
    <h1>Card</h1>
    <div className="content">
      <div className="img3">
         <img src={card} className="project" />
      </div>
      <div className="text">
        <p>The Order Summary Card is a beginner-friendly front-end project built with HTML and CSS. It is a simple and elegant UI component that displays a product or service summary with pricing details, plan information, and action buttons.
                 <br /><br />
                 ✨ Features
                 <br /><br />
                 🎨 Clean and modern card design
                 <br />
                📱 Responsive layout for mobile and desktop
                <br />
                 🖼️ Styled using pure CSS (no frameworks)
                 <br />
                🔘 Includes buttons for user interaction (proceed or cancel)
                <br /><br />
                💻 Tech Stack
                <br /><br />
                •HTML5
                <br />
                •CSS3
                </p>
      <a href="https://nikhilthakur121.github.io/Card/" className="btn">Preview</a>
      </div>
    </div>
  </div>
  )
}

export default Projects;

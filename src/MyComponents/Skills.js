import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/javascript.png"
import react from "../images/react.png"
import bootstrap from "../images/bootstrap.png"
import mysql from "../images/mysql.png"
const Skills = () => {
  return (
    <>
    <h1 className="skills">Skills</h1>
    <div className="cards">
       <div className="card">
          <div className="card-img">
                <img src={html} alt="png"/>
          </div>
            <div className="card-title">
                <h4>HTML</h4>
            </div>              
       </div>

       <div className="card">
          <div className="card-img">
                <img src={css} alt="png"/>
          </div>
            <div className="card-title">
                <h4>CSS</h4>
            </div>              
       </div>

       <div className="card">
          <div className="card-img">
                <img src={js} alt="png"/>
          </div>
            <div className="card-title">
                <h4>Javascript</h4>
            </div>              
       </div>

       <div className="card">
          <div className="card-img">
                <img src={react} alt="png"/>
          </div>
            <div className="card-title">
                <h4>React</h4>
            </div>              
       </div>

       <div className="card">
          <div className="card-img">
                <img src={bootstrap} alt="png"/>
          </div>
            <div className="card-title">
                <h4>Bootstrap</h4>
            </div>              
       </div>

       <div className="card">
          <div className="card-img">
                <img src={mysql} alt="png"/>
          </div>
            <div className="card-title">
                <h4>MySql</h4>
            </div>              
       </div>
    </div>
    </>
  )
}

export default Skills;

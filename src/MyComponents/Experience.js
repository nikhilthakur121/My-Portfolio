import ex from "../images/ex.jpg"
import ex1 from "../images/ex1.jpg"
import ex2 from "../images/ex2.jpg"
import ff from "../images/ff.jpg"
import ff1 from "../images/ff1.jpg"
import ff2 from "../images/ff2.jpg"
import wk from "../images/wk.jpg"

const Experience = () => {
  return (
  <div className='exp'>
      <h1>Experience</h1>
    <div className='experience'>
      <h3>Data Analyst </h3>
      <div className="exp-img">
         <img src={ex} alt="ex" />
         <img src={ex1} alt="ex1" />
         <img src={ex2} alt="ex2" />
      </div>
      <p>Data Analyst Internship – Excellence Technology (6 Months)
        <br /><br />
         During my internship, I gained hands-on experience in data analysis, data visualization, and reporting. I worked on real-world datasets to extract meaningful insights, clean and transform data, and present findings in a clear and structured manner. My responsibilities included:
         <br /><br />
         •Collecting, cleaning, and preprocessing raw data for analysis.
         <br />
         •Using tools like Excel, SQL, and Python for data manipulation and analysis.
         <br />
         •Creating interactive dashboards and visualizations using tools such as Power BI / Tableau.
         <br />
         •Performing statistical analysis to identify patterns, trends, and business insights.
         <br />
         •Preparing detailed reports to support decision-making processes.
         <br /><br />
        This internship enhanced my problem-solving skills, analytical thinking, and ability to work with large datasets, strengthening my foundation as a Data Analyst.
        </p>
    </div>
    <div className="experience">
      <h3>Web Designing </h3>
      <div className="exp-img">
        <img src={ff} alt="ff" />
         <img src={ff1} alt="ff1" />
         <img src={ff2} alt="ff2" />
      </div>
      <p>
       Web Designer Internship/Training – Future Finders (45 Days)
       <br /><br />
       I successfully completed a 45-day internship/training focused on modern web design practices. During this program, I gained practical experience in designing and developing responsive, user-friendly websites. My key learning areas and responsibilities included:
       <br /><br />
       •Working with HTML, CSS, and JavaScript to build interactive web pages.
       <br />
       •Designing responsive layouts compatible with multiple devices and screen sizes.
       <br />
       •Learning UI/UX principles to create clean and attractive designs.
       <br />
       •Using tools like Bootstrap, Figma, and Photoshop.
       <br />
       •Collaborating on mini-projects to implement real-world web design solutions.
       <br /><br /> 
       This training helped me strengthen my front-end development skills, improve creativity in web design, and understand how to create engaging digital experiences.
      </p>
    </div>
    <div className="experience">
      <h3>C++ & Java </h3>
      <div className="exp-img">
        <img src={wk} alt="wk" />
      </div>
      <p>
        C++ and Java Workshop – Bahra University, Shimla (3 Days)
        <br /><br />
        I attended a 3-day workshop focused on C++ and Java programming, where I gained exposure to object-oriented programming concepts, basic problem-solving techniques, and hands-on coding practice. The workshop covered:
        <br /><br />
        Fundamentals of C++ and Java syntax.
        <br />
        Understanding object-oriented programming principles (classes, objects, inheritance, polymorphism).
        <br />
        Writing and executing simple programs to strengthen logical thinking. 
        <br />
        Practical demonstrations to bridge theoretical knowledge with implementation.
        <br /><br />
        This workshop enhanced my programming foundation and improved my ability to approach problems with a structured coding mindset.
      </p>
    </div>
  </div>
  )
}

export default Experience;

import bahra from "../images/bahra.jpg"
import wok1 from "../images/wok1.jpg"
import wok2 from "../images/wok2.jpg"
const Education = () => {
  return (
    <div className="edu">
      <h1>Education</h1>
      <div className="college">
      <img src={bahra} alt="bahraa" />
      <p>🎓 Bachelor of Computer Applications (BCA)
        <br />
          Bahra University, Shimla
         <br /> <br />
          I completed my BCA from Bahra University, Shimla, where I built a strong foundation in computer science and programming. My coursework covered key areas such as software development, web technologies, database management, operating systems, and networking. During my degree, I worked on various academic projects that enhanced my problem-solving, coding, and analytical skills. This education has equipped me with both theoretical knowledge and practical experience, preparing me for real-world challenges in the IT and software development field.</p>
        </div>
        <div className="college1">
          <img src={wok2} alt="wok1" />
          <p>💻 7-Day Workshop on C++ and Java
            <br /><br />
           I attended a 7-day hands-on workshop on C++ and Java organized at my college, where I enhanced my understanding of object-oriented programming concepts, problem-solving techniques, and the fundamentals of software development. The workshop gave me practical exposure to writing efficient code, debugging, and building small applications, which helped strengthen my programming foundation and logical thinking skills.</p>
        </div>
        <div className="college2">
          <p>🏅 Workshop Certificate Achievement
            <br /><br />
           Successfully completed a 7-day workshop on C++ and Java and was awarded the certificate of completion by S. Gurvinder Singh Bahra, Chairman of Bahra University.</p>
           <img src={wok1} alt="wok2" />
        </div>
    </div>
  )
}

export default Education;

import Main from "../images/Main1.jpg";
import Main1 from "../images/Main2.jpg";
const Home = () => {
  return (
   <div className="home"> 
    <section>
        <div className="home-img">
            <img src={Main} alt="Default" className="default-img"/>
            <img src={Main1} alt="On hover" className="hover-img"/>
        </div>
        <div className="home-content">
            <h1>Hi, It's <span>Nikhil</span></h1>
            <h3 className="typing-text">I'm a <span></span></h3>
            <p>I am a passionate and dedicated web developer with a strong focus on creating responsive, user-friendly, and visually appealing websites. Skilled in HTML, CSS, JavaScript, and modern frameworks,
                 I enjoy turning ideas into fully functional digital experiences. I have a keen eye for design, performance optimization, and clean code practices, ensuring that every project I work on is efficient and scalable. 
                Always eager to learn new technologies and improve my craft, I strive to deliver high-quality solutions that not only meet but exceed client expectations.</p>
              <div className="hobbies">
                <h4>Hobbies</h4>
                <p>Coding, editing, gym, casual gaming.</p>
              </div>
            <div className="social-icons">
                <a href='https://www.linkedin.com/in/nikhil-thakur-a2a049309'><i className="fa-brands fa-linkedin" target="_blank"></i></a>
                <a href='https://github.com/nikhilthakur121'><i className="fa-brands fa-github" target='_blank'></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href='https://www.instagram.com/niikkh.il?igsh=MW9zdnY5NG00ZWFw'><i className="fa-brands fa-instagram"></i></a>
            </div>
            <a href="#" class="btn">Hire me</a>
            </div>
      </section>  
    </div>
  );
};

export default Home;

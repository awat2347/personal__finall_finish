import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './About.module.scss';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <section id="About">
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.about} data-aos="fade-right">
              About me <span></span>
            </div>

            <div className={s.am}>
              <h1 data-aos="fade-up">
                I am <span>Chingiz</span>
              </h1>
              <h4 data-aos="fade-up" data-aos-delay="200">
                I'm a Front-End Developer with a passion for crafting engaging and intuitive user interfaces. Specializing in modern web technologies and frameworks, I focus on creating seamless, responsive, and visually appealing designs that enhance user experiences. With a strong eye for detail and a dedication to clean, efficient code, I thrive on turning creative ideas into functional and interactive solutions. I'm committed to continuous learning, staying at the forefront of industry trends, and collaborating with teams to deliver top-notch digital experiences. Let’s work together to bring your vision to life!
              </h4>
            </div>

            <div className={s.exp}>
              <div data-aos="zoom-in" data-aos-delay="300">
                <h1>8+</h1>
                <p>
                  MONTHS OF <br /> TRAINING
                </p>
              </div>

              <div data-aos="zoom-in" data-aos-delay="400">
                <h1>4</h1>
                <p>
                  Projects <br /> Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

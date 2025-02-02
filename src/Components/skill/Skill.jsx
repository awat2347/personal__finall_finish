import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './skill.module.scss';

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <section id="Skill">
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.skills} data-aos="fade-right">
              <h3>My Skills</h3>
              <span></span>
            </div>

            <div className={s.text}>
              <div data-aos="fade-left">
                <h1>My Skills</h1>
                <span>
                  <h1>Overview</h1>
                </span>
              </div>
              <div data-aos="fade-up">
                <p>A glimpse into my full-stack proficiency and technical prowess.</p>
              </div>
            </div>

            <div className={s.Vs_code}>
              <div className={s.card} data-aos="zoom-in">
                <img src="/Html.svg" alt="" />
                <h4>Html</h4>
              </div>

              <div className={s.card} data-aos="zoom-in" data-aos-delay="100">
                <img src="/JavaScript.svg" alt="" />
                <h4>JavaScript</h4>
              </div>

              <div className={s.card} data-aos="zoom-in" data-aos-delay="200">
                <img src="/Vs-code.svg" alt="" />
                <h4>Vs code</h4>
              </div>

              <div className={s.card} data-aos="zoom-in" data-aos-delay="300">
                <img src="/React.svg" alt="" />
                <h4>React</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;

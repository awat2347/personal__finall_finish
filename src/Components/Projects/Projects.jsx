// src/components/Projects.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Projects.module.scss';
import AdminWrapp from '../AdminWrapp/AdminWrapp';
import { useAppContext } from '../../AppContext';
const Projects = () => {

const { projects } = useAppContext(); // Получаем проекты из контекста

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="Projects">
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.My_projects} data-aos="fade-right">
            <h3>My projects</h3>
            <span></span>
          </div>

          <div className={s.cards}>
            <div className={s.text} data-aos="fade-left">
              <h1>Projects</h1>
              <span>
                <h1>Showcase</h1>
              </span>
            </div>

            <div className={s.Showcase}>
              {projects.map((project) => (
                <div className={s.card} data-aos="fade-right" key={project.id}>
                  <div className={s.img}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                  </div>
                  <div className={s.info}>
                    <p>{project.description}</p>
                  </div>
                  <div className={s.links}>
                    <div>
                      <img src="/link.svg" alt="link" />
                      <a href={project.liveLink}>Live Preview</a>
                    </div>
                    <div>
                      <img src="/Github.svg" alt="github" />
                      <a href={project.codeLink}>View Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Вставляем компонент AdminWrapp, передаем функцию addProject */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

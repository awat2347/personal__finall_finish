import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          {/* Логотип */}
          <div
            className={s.logo}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            &lt;logo/&gt;
          
      
          </div>

          {/* Ссылки */}
          <div
            className={`${s.link} ${menuOpen ? s.active : ""}`}
         
          >
            <Link to={"/"}> Home </Link>
            <a href="#About">About</a>
            <a href="#Skill">Skills</a>
            <a href="#Projects">Projects</a>
            <Link to={"/admin"}> Admin</Link>
            <button data-aos="zoom-in" data-aos-delay="300">
              <a href="#Contact">Contact Me</a>
            </button>
          </div>

          {/* Бургер-меню */}
          <div
            className={s.burger}
            onClick={toggleMenu}
            
          >
            <span className={menuOpen ? s.open : ""}></span>
            <span className={menuOpen ? s.open : ""}></span>
            <span className={menuOpen ? s.open : ""}></span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;

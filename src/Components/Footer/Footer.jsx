import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './Footer.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos'; 

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    const token = '7806929605:AAHBRDCyS8FMbpF1e-vqt3B3rBEfVmI7Q2c'; 
    const chatId = '1801009351'; 
    const text = `
      🚀 Новое сообщение:
      Имя: ${formData.name}
      Email: ${formData.email}
      Тема: ${formData.subject}
      Сообщение: ${formData.message}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text,
      });
      alert('Сообщение успешно отправлено!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
      alert('Не удалось отправить сообщение.');
    }
  };

  return (
    <footer id='Contact'>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.Contact} data-aos="fade-up"> {}
            <h3>Contact me</h3>
            <span></span>
          </div>

          <div className={s.Together} data-aos="fade-left"> {}
            <div className={s.text}>
              <h1>Let’s Work</h1>
              <span>
                <h1>Together</h1>
              </span>
            </div>

            <form onSubmit={sendMessage}>
              <div className={s.inp}>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                />
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-aos="fade-up" 
                />
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  data-aos="fade-up" 
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-aos="fade-up" 
                  className={s.textarea}
                />
              </div>
              <button
                type="submit"
                style={{
                  marginLeft: '20px',
                  marginTop: '16px',
                  padding: '12px 20px',
                  backgroundColor: '#25B81D',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
                data-aos="fade-up"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

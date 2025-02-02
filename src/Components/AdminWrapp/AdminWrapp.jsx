// src/components/AdminWrapp.js
import React, { useState } from 'react';
import s from './AdminWrapp.module.scss';
import { useAppContext } from '../../AppContext';

const AdminWrapp = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    liveLink: '',
    codeLink: '',
    image: '',
  });
   
  const { addProject } = useAppContext(); // Получаем функцию addProject из контекста

  // Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(newProject); // Используем функцию addProject из контекста
    setNewProject({
      title: '',
      description: '',
      liveLink: '',
      codeLink: '',
      image: '',
    });
  };


  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '123') {
      setIsAuthenticated(true);
    } else {
      alert('Неверный пароль!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className='admin' style={{ padding: '100px', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",  color: "white" }}>
        <h1>Вход в панель администратора</h1>
        <form onSubmit={handlePasswordSubmit}>
          <label>
            Введите пароль:
            <input className='input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className='btn' type="submit">Войти</button>
        </form>
      </div>
    );
  }

  return (
    <div className={s.formContainer}>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={newProject.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={newProject.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="url"
          name="liveLink"
          placeholder="Live Preview Link"
          value={newProject.liveLink}
          onChange={handleInputChange}
        />
        <input
          type="url"
          name="codeLink"
          placeholder="Code Link"
          value={newProject.codeLink}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProject.image}
          onChange={handleInputChange}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AdminWrapp;

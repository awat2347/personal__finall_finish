
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  
  const [projects, setProjects] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);


  const addProject = (newProject) => {
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects((prevProjects) => [...prevProjects, data]); 
      });
  };

  const value = {
    projects,
    addProject,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

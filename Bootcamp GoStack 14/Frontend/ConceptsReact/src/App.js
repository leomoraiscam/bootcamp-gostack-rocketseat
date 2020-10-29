import React, { useState, useEffect } from 'react';
import api from './services/api';
import Header from './components/Header';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    api.get('projects').then((response)=>{
      setProjects(response.data);
    });
  },[]);

  async function handleAddProjects(){
    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Leonardo Morais" 
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title={'React'} />  

      <ul>
        {projects.map((project)=>(
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button 
        type="button" 
        onClick={handleAddProjects}
      >
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
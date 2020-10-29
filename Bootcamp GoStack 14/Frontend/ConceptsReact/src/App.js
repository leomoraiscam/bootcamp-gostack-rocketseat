import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento de app',
    'Front-end web'
  ]);

  function handleAddProjects(){
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title={'React'} />  

      <ul>
        {projects.map((project)=>(
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProjects}>Adicionar projeto</button>
    </>
  )
}

export default App;
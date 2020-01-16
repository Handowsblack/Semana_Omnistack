import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';



function App() {
  const [ github_username, setGithubusername ] = useState('');
  const [ techs, setTechs ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, [])

  async function handleAddDev(e) {
    e.preventeDefault();

      const response = await api.post('/devs', {
        github_username,
        techs,
        latitude,
        longitude,
      })
      console.log(response.data);
  }
  
  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form onSubmit={handleAddDev}>
            <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e => setGithubusername(e.target.value)}
            />
            </div>

            <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}
            />
            </div>
            
            <div className="input-group">
                <div className="input-block">
                  <label htmlFor="latitude">Latitude</label>
                  <input 
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                  />
                  </div>

                <div className="input-block">
                  <label htmlFor="longitude">Longitude</label>
                  <input 
                  type="number" 
                  name="longitude" 
                  id="longitude" 
                  required 
                  value={longitude}
                  onChange={e => setLongitude(e.target.value)}
                  />
                </div>
              </div>

            <button type="submit">Salvar</button>
          </form>

        </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://i.pinimg.com/originals/63/4f/c7/634fc7589ecb8b3229528763c2a246a1.jpg" alt="Allex Júnior"/>
                <div className="user-info">
                  <strong>Allex Júnior</strong>
                  <span>C#, ReactJS, Delphi, C++</span>
                </div>
              </header>
              <p>" Um ponto de baixeza tão alto " ~Mestre, Allex - 4892 A.C.</p>
              <a href="https://github.com/Handowsblack">Acessar Perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://i.pinimg.com/originals/63/4f/c7/634fc7589ecb8b3229528763c2a246a1.jpg" alt="Allex Júnior"/>
                <div className="user-info">
                  <strong>Allex Júnior</strong>
                  <span>C#, ReactJS, Delphi, C++</span>
                </div>
              </header>
              <p>" Um ponto de baixeza tão alto " ~Mestre, Allex - 4892 A.C.</p>
              <a href="https://github.com/Handowsblack">Acessar Perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://i.pinimg.com/originals/63/4f/c7/634fc7589ecb8b3229528763c2a246a1.jpg" alt="Allex Júnior"/>
                <div className="user-info">
                  <strong>Allex Júnior</strong>
                  <span>C#, ReactJS, Delphi, C++</span>
                </div>
              </header>
              <p>" Um ponto de baixeza tão alto " ~Mestre, Allex - 4892 A.C.</p>
              <a href="https://github.com/Handowsblack">Acessar Perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://i.pinimg.com/originals/63/4f/c7/634fc7589ecb8b3229528763c2a246a1.jpg" alt="Allex Júnior"/>
                <div className="user-info">
                  <strong>Allex Júnior</strong>
                  <span>C#, ReactJS, Delphi, C++</span>
                </div>
              </header>
              <p>" Um ponto de baixeza tão alto " ~Mestre, Allex - 4892 A.C.</p>
              <a href="https://github.com/Handowsblack">Acessar Perfil no Github</a>
            </li>
          </ul>
        </main>
      </div>
  );
}

export default App;

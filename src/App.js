import logo from './logo.svg';
import './App.css';
import ProjectItem from './components/ProjectItem.js';
import projectData from './assets/project-data.json';

projectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-title"><p>SprintingSloth</p></div>
        <div className="header-menu">

        </div>
      </header>
      <div className='body'>
        <div className='intro'>
          Hi I am bla bla
        </div>
        <h2>Projects</h2>
        <div className='projects'>
         <div><ProjectItem item={projectData[0]}/></div>
          <div><ProjectItem item={projectData[1]}/></div>
          <div><ProjectItem item={projectData[2]}/></div>
          <div><ProjectItem item={projectData[3]}/></div>
        </div>

        <div className='footer'> '</div>
      </div>
    </div>
  );
}

export default App;

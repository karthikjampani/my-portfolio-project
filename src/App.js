
import Nav from './components/Navbar';
import './App.css';
import Home from './components/Aboutm'
import AboutMe from './components/aboutMe'
import MySkills from './components/MySkills'
import MyProjects from './components/Myproject'

function App() {
  
  return (
    <div className="App">
      <div><Nav/></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div><Home/></div>
      <br></br>
      <div><AboutMe /></div>
      <br></br>
      <MySkills/>
      <br></br>
      <br></br>
      <MyProjects/>




    </div>
  );
}

export default App;

import './page.css'
import {Header} from './components/header'
import {Nav} from './components/nav'



export default function Home() {
  return (
    <div className="page">
      <Header />
      <Nav/>
        <div id="experience" className="section">
          <h1>Experience</h1>
          <p>...</p>
        </div>

        <div id="projects" className="section">
          <h1>Projects</h1>
          <p>...</p>
        </div>

        <div id="hobbies" className="section">
          <h1>Hobbies</h1>
          <p>...</p>
        </div>

        <div id="me" className="section">
          <h1>About Me</h1>
          <p>...</p>
        </div>
      <a href="https://www.flaticon.com/free-icons/pet" title="pet icons">Cat cursor by Sergei Kokota - Flaticon</a>
    </div>
  )
}

import './page.css'
import {Header} from './components/header'
import {Nav} from './components/nav'

/**
 * remember <h2> cannot be a descendant of <p>.
 * fixed, replace p with a div
 */

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Nav />
        <div id="experience" className="section">
          <h1>Experience</h1>
          <div className="inner-section">Sales Associate
            <h2>July 2025 - Present</h2>
            <ul>
              <li>Operate POS and handle transactions</li>
              <li>Maintain store cleanliness and organization</li>
              <li>Provide timely customer service</li>
            </ul>
          </div>

          <div className="inner-section">Technology Apprenticeship
            <h2>June 2023 - Aug. 2023</h2>
              <ul>
                <li>Created and deployed machines in AWS (Amazon Web Services)</li>
                <li>Developed UI/UX web designing skills in Figma</li>
                <li>Explored the foundations and concepts behind machine learning, AI, and autonomous systems</li>
              </ul>
              </div>

          <div className="inner-section">Assistant
            <h2>Summer 2022</h2>
            <ul>
              <li>Organize patient information</li>
              <li>Managed employee's payroll with Excel</li>
            </ul>
            </div>
        </div>
        {/* end of experience*/}

        <div id="projects" className="section">
          <h1>Projects</h1>
          <p>...</p>
        </div>
        {/* end of projects*/}

        <div id="hobbies" className="section">
          <h1>Hobbies</h1>
          <p>...</p>
        </div>
        {/* hobbies */}

        <div id="me" className="section">
          <h1>About Me</h1>
          <p>...</p>
        </div>
        {/* about me*/}

      <a href="https://www.flaticon.com/free-icons/pet" title="pet icons">Cat cursor by Sergei Kokota - Flaticon</a>
    </div>
  )
}

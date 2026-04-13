import './page.css'
import {Header} from './components/header'
import {Nav} from './components/nav'
import Link from 'next/link'

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
          <div className="inner-section">Target | Starbucks Barista
            <h2>March 2026 - Present</h2>
            <ul>
              <li>...</li>
            </ul>
          </div>

          <div className="inner-section">Dunkin | Sales Associate
            <h2>July 2025 - November 2025</h2>
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
            {/**https://wumbo.net/symbols/up-right-arrow/ */}

            <div className="inner-section"> pobby
              <Link href="https://github.com/bettaburger/pobby" target="_blank">
                <h2>A CLI tool for managing listening ports | Go, CLI, Cobra, Bubbletea ↗</h2>
                <ul>
                  <li>Displays listening ports in the terminal with the option to search and kill ports</li>
                  <li>Project uses Cobra's CLI library and Bubbletea's TUI library</li>
                </ul>
              </Link>
            </div>

            <div className="inner-section"> enc
              <Link href="https://github.com/bettaburger/enc" target="_blank">
                <h2>A program that displays http/https responses in JSON format | Go, Curl, JSON</h2>
              </Link>
            </div>

            <div className="inner-section"> grp
              <Link href="https://github.com/bettaburger/grp" target="_blank">
                <h2>Small collection of shell cmds written with Go | Go, Bash, Shell</h2>
              </Link>
            </div>

        </div>
        {/* end of projects*/}

        <div id="other interests" className="section">
          <h1>Hobbies</h1>
            <div className="inner-section">Fish-keeping</div>
            <div className="inner-section">Stamp making</div>
            <div className="inner-section">Hiking</div>
        </div>
        {/* hobbies */}

        <div id="me" className="section">
          <h1>About Me</h1>
          <h2>I'm a third year student studying at Computer Science at University of Massachusetts Boston.
            My current interests at the moment are Linux operating systems and networks.
            Outside of coding, I like to listen to music, my favorite bands are Alice in Chains, Staind, Helmet, Hum and more.
          </h2>
        </div>
        {/* about me*/}

        <div id="books" className="section">
          <h1>Books</h1>
          <div className="inner-section">In-progress
            <ul>
                <li>Networking: A Top Down Approach | Jim Kurose</li>
              </ul>
          </div>

          <div className="inner-section">Some Books I enjoyed reading. 
            <ul>
                <li>Algorithms 4th Edition | Kevin Wayne Robert Sedgewick</li>
                <li>The Go Programming Language | Donovan Kernighan</li>
                <li>The C Programming Language | Brian Kernighan Dennis Ritchie</li>
                <li>Introduction to Programming in Python | Robert S. Kevin Wayne Robert D.</li>
                <li>Modern Operating Systems 5th Edition | Andrew S. Tanenbaum Herbert Bos</li>
                <li>Computer Organization & Design The Hardware / Software | Morgan Kaufmann</li>
                <li>How Linux Works 2nd Edition | Brian Ward</li>
              </ul>
          </div>
        </div>


      <a href="https://www.flaticon.com/free-icons/pet" title="pet icons">Credits to Sergei Kokota for the cat cursor.</a>
    </div>
  )
}

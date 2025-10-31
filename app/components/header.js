/** Header
 * Includes:
 * Full name
 * Description
 * Links; Github, Linkedin, email 
 * Navigation bar; experience, projects, education, resume. 
 */

/**
 * better to have <Link> component made within your site
 * use a target instead to move to another site, otherwise Link loads the site all together.  
 */

import '../styles/header.css'
import Link from 'next/link'

export function Header() {
    return (
        /**
         * Target attribute <a>
        https://stackoverflow.com/questions/65632698/how-to-open-a-link-in-a-new-tab-in-nextjs
         */
        <div className="header">   
            <div className="box">
               <a target="_blank" href="https://github.com/bettaburger" className="button" >
                Github
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/stephanie-ha-88127b233/" className="button" >
                Linkedin
                </a>
                <a target="_blank" href="/Resume2025.pdf" className="button">
                Resume
                </a>       
            </div>

            <h1>Stephanie Ha</h1>
            <h2>Student at University of Massachusetts Boston</h2>

        </div>
    )
}
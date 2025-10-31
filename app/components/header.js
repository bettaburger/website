/** Header
 * Includes:
 * Full name
 * Description
 * Links; Github, Linkedin, email 
 */

/**
 * better to have <Link> component made within your site
 * use a target instead to move to another site, otherwise Link loads the site all together.  
 */

import '../styles/header.css'
import Link from 'next/link'
import {Nav} from './nav'

export function Header() {
    return (
        /**
         * Target attribute <a>
        https://stackoverflow.com/questions/65632698/how-to-open-a-link-in-a-new-tab-in-nextjs
         */
        <div className="header">   
            <div className="box">
                <a target="_blank" href="https://github.com/bettaburger" className="button" 
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                    }} 
                >
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                        alt="GitHub Logo" 
                        className="w-5 h-5"
                        style={{
                            width: "15px", 
                            height: "15px"
                        }}
                    />
                    Github
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/stephanie-ha-88127b233/" className="button" 
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                    }} 
                >
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/76/Font_Awesome_5_brands_linkedin.svg" 
                        alt="LinkedIn logo " 
                        className="w-5 h-5"
                        style={{
                            width: "15px", 
                            height: "15px"
                        }}
                    />
                    LinkedIn
                </a>

                <a target="_blank" href="/Resume2025.pdf" className="button" 
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                    }} 
                >
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" 
                        alt="Latex logo resume" 
                        className="w-5 h-5"
                        style={{
                            width: "15px", 
                            height: "15px"
                        }}
                    />
                    Resume
                </a>    
            </div>

            <h1>Stephanie Ha</h1>
            <h2>Hello! My name is Stephanie and this is my website.</h2>
            <h2>I'm a CS student @ University of Massachusetts Boston,</h2>
            <h2>hoping to pursue a field in network/cloud computing in the future.</h2>
            <Nav/>
        </div>
        
    )
}
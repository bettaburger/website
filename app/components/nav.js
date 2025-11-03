/**
 * Navigation bar
 * Includes
 * Experience, projects, hobbies, me (contact)
 * animates inside, fades in. 
 */
'use client';
import '../styles/nav.css'

/*https://stackoverflow.com/questions/16349490/html-css-buttons-that-scroll-down-to-different-div-sections-on-a-webpage*/

export function Nav() {

    /*scrolls to the id/section of the page when button is clicked */
    const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className='nav'>
            <div className="button" onClick={() => scrollTo('experience')}>
                Experience
            </div>

            <div className="button" onClick={() => scrollTo('projects')}>
                Projects
            </div>

            <div className="button" onClick={() => scrollTo('other interests')}>
                Hobbies
            </div>

            <div className="button" onClick={() => scrollTo('me')}>
                Me
            </div>

            <div className="button" onClick={() => scrollTo('books')}>
                Books
            </div>

        </div>
    )
}
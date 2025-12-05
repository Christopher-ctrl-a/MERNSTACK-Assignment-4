// project.jsx Christopher Esguerra 301483615 September 11, 2025
import '../pagecss/project.css'
import Site from '../assets/Introduction-Site.png'
import UML from '../assets/WallMallStore ERD.pdf'
import UMLimg from '../assets/Wallmall_UML_DIAGRAM.png'
export default function Project() {
  return (
    <>
      <section className="project-section">
        <h3>Below are some of the projects I've worked on:</h3>
        <h2>Introduction Website with HTML/CSS</h2>
        <img src={Site} alt="Introduction Site" />
        <a target='_blank' href="https://christopher-ctrl-a.github.io/Introduction/">Click Here to Visit the Site</a>
        <p className="project-description">This my first project which involved creating a responsive website using HTML and CSS. This site is not as polished as I want it to be, however feel free to take a look! I focused on semantic HTML and modern CSS techniques to ensure the site is accessible and functional.</p>
        <h2>Pixel Art Gallery</h2>
        <a target='_blank' href="https://christopher-ctrl-a.github.io/Pixel-Art-Gallery/">Click Here to Visit the Site</a>
        <h1>* Work In Progress *</h1>
        <p className="project-description"> This is a personal project to showcase my pixel art creations. I used HTML and CSS to create a visually appealing gallery layout. The site is designed to be simple and easy to navigate, allowing visitors to focus on the artwork.</p>
        <h2>Other Projects</h2>
        <img src={UMLimg} alt="UML Diagram" />
        <a target='_blank' href={UML}>View UML Diagram</a>
        <p className="project-description">This is a UML diagram which I've built to represent the database structure for a project. It includes all the entities and their relationships, providing a clear overview of the system's architecture. In order to simulate a real world application, I used chatGPT to formulate a documentation of requirements and specifics.</p>
      </section>
      <footer>
        <p>&copy; 2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)</p>
      </footer>
    </>
  )
}
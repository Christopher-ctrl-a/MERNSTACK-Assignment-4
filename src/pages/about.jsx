// about.jsx Christopher Esguerra 301483615 September 11, 2025
import '../pagecss/about.css'
import Profile from '../assets/placeholder.jpg'
import resume from '../assets/Resume_ChristopherEsguerra.pdf'

export default function About() {
  return (
   <>
    <section className="about-section">
      
              <h1>About Me</h1>
              <p>Thanks for checking out my site! My name is <span className="highlight">Christopher Esguerra</span> and I'm a <span className="highlight">junior software engineer</span> (advanced diploma by 2027). I'm always excited to learn new skills and apply them to personal and academic projects. My other hobbies include rock climbing, working out at the gym, and video games.</p>
       
       <img src={Profile} alt="Profile" className="about-image" />
     
   
    <a href={resume} target="_blank" rel="noopener noreferrer">View Resume</a>
      
    
       
      </section>

    <footer>
      <p>&copy; 2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)</p>
    </footer>
  </>
  )

}

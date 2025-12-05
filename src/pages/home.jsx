// home.jsx Christopher Esguerra 301483615 September 11, 2025

import "../pagecss/home.css"
import profile from "../assets/pfp.png"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
<>

        <section className="intro-section">
            <div className="intro-text">
                <h2><span className="intro-greeting">Welcome</span></h2>
                <h3>
                    My name is <span className="intro-highlight"><Link to="/about">Christopher Esguerra</Link></span>
                </h3>
                <p >
                    I'm a junior software developer who's passionate about creating engaging and user-friendly web experiences, with this site being my current project!
                </p>
            </div>
            <img src={profile} alt="Placeholder" />
        </section>



     <footer>
      <p>&copy; 2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)</p>
    </footer>
</>
    )
}
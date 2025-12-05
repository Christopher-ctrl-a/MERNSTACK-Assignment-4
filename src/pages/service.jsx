// service.jsx Christopher Esguerra 301483615 September 11, 2025
import '../pagecss/service.css'
import img1 from '../assets/pexels-joshsorenson-1714208.jpg'
import img2 from '../assets/pexels-pixabay-301792.jpg'
import img3 from '../assets/pexels-luis-gomes-166706-546819.jpg'

export default function Service() {
  return (
    
      <section className="service-section">
        <h1>My Skills</h1>
        <div className="service-container">
          <span className="service-skill">HTML</span>
          <span className="service-skill">CSS</span>
          <span className="service-skill">JavaScript</span>
          
        </div>
        <div>
          <img src={img1} alt="Image 1" />
        </div>
        <div className="service-container">
          <span className="service-skill">React</span>
          <span className="service-skill">Pixel Art</span>
          <span className="service-skill">C#</span>
          
        </div>
        <div>
        <img src={img2} alt="Image 2" />
        </div>
        
        <div className="service-container">
          <span className="service-skill">JavaScript</span>
          <span className="service-skill">Java</span>
          <span className="service-skill">SQL</span>

          
        </div>
        <div>
          <img src={img3} alt="Image 3" />
        </div>

      <footer>
        <p>&copy; 2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)</p>
      </footer>
      </section>
     
    
  )
}
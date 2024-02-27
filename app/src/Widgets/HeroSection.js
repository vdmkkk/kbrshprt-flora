import './HeroSection.css'
import House from './Pics/House.png'

function HeroSection() {
    return (
        <div className='HeroSection'>
            <h1 className='Title'>Discover a place <br/> you will love to live</h1>
            <p className='Description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
Imperdiet tempus felis vitae sit est quisque.</p>  
            <p className='Info'>Location Price Type of Property</p> {/* доделать! */}
            <p className='Numbers'>2000+ 500+</p>
            <p className='Under_nums'>Property Ready Happy Customer</p>
            <img className='Image' src={House} alt="picture" />     
               
        </div>
)}

export default HeroSection;
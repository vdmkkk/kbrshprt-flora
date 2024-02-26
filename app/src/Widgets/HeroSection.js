import './HeroSection.css'
import House from './Pics/House.png'

function HeroSection() {
    return (
        <div className='HeroSection'>
            <h1 className='Title'>Discover a place <br/> you will love to live</h1>
            <p className='Description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
Imperdiet tempus felis vitae sit est quisque.</p>  
            <img className='Image' src={House} alt="picture" />     
            <p className='Info'>Location Price Type of Property</p>   
        </div>
)}

export default HeroSection;
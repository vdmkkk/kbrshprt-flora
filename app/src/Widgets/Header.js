import './Header.css'
import Logo from './Pics/Logo.png'

function Header() {
  return (
    <div className='Header'>
      <div className='Frame'>
        <img className='Logo' src={Logo} alt=""/>
        <p className='Header_btn'>Home</p>
        <p className='Header_btn'>About</p>
        <p className='Header_btn'>Service</p>
        <p className='Header_btn'>New property</p>
        <p className='Header_btn'>Contact</p>
        <button className='Login_btn'>Login</button>
      </div>
    </div>
)};

export default Header;
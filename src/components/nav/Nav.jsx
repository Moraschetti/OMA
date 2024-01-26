import './nav.css';
import Oma from '../../assets/Oma.jpg'

function Nav() {
return (
    <header className='header-nav'>
        <a href="#"  className="logo">
            <img src={Oma} alt="oma" style={{borderRadius:'10px'}}/>
        </a>
        <div className="menuToggle"></div>
        <ul className="nav">
            <li className="active" ><a href="#home">Home</a></li>
            <li><a href="#services">Historia</a></li>
            <li><a href="#portfolio">Eventos</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
    </header>
)
}

export default Nav
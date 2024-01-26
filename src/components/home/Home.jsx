import './home.css';
import agua from '../../assets/agua.jpg'


function Home() {
  return (
    <div className=''>

        <img src={agua} className="img-fluid" alt="agua"></img>
        
        <h2 className='home-h2'>Oma</h2>
        <p className='home-p'>Centro Holistico Integral</p>
        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid illum recusandae sapiente nostrum, quas eius maiores cumque quia enim. Voluptatum facilis nobis non nisi reprehenderit dolores aliquid minus voluptate suscipit.</p> 
    </div>

  )
}

export default Home
import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Home.css";
const Card = () => {
  return (
    <div>
    <div className='nav'> 
        <ul>
        <li>
          <NavLink to='/' >Product News</NavLink>
        </li>
        <li>
          <NavLink to='/Card' style={{color:"black"}}>Security</NavLink>
        </li>
        <li>
          <NavLink to='/Main'>Devoleper</NavLink>
        </li>
        <li>
          <NavLink to='/Footer'>Speed and Relaibility</NavLink>
        </li>
        <li>
          <NavLink to='/ZeroTrust'>Zero Trust</NavLink>
        </li>
        </ul>
      </div>
      <div className="card1">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus officiis blanditiis itaque fugit nobis laboriosam nesciunt voluptas reprehenderit delectus similique dolorum tempora neque quia, eveniet natus quis earum incidunt!</h1>
      <h1>This is Card Page....</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita quis temporibus quam odit magni molestiae, nobis similique dignissimos totam voluptate fuga maxime earum debitis at? Vel delectus dolor molestias non obcaecati animi officia nemo quis fuga nostrum inventore qui, quam doloremque quidem pariatur accusamus corrupti recusandae voluptatibus beatae cum quibusdam veritatis ullam nam. Consequuntur, excepturi natus! Dolores aut necessitatibus animi quod labore at blanditiis praesentium voluptatem nostrum, libero mollitia, placeat dolorum totam pariatur aspernatur earum ab. Qui illum laborum nesciunt quidem possimus. Maiores necessitatibus, a cum magni ad tempore minus deleniti laboriosam facere ducimus autem delectus. Laboriosam, illo. Maiores accusantium cumque voluptatum quia veniam tempore ratione iure blanditiis, architecto officiis tempora porro laudantium saepe. Soluta, ea. Fuga, saepe qui. Vero nesciunt repellat neque iusto corporis. Mollitia quibusdam labore repudiandae vel. At sit, minima pariatur similique rem repellat quae nobis cupiditate, fuga sapiente voluptas odit dolorem amet cum ab fugit veritatis nisi accusantium reprehenderit quo aliquam. Placeat mollitia fugit veritatis totam quos! Culpa saepe tempora enim nesciunt dolorem accusamus. Aliquid officiis enim voluptates atque quam cupiditate soluta nam molestias repellendus deserunt pariatur magni ea, odit quia consectetur corporis voluptatem perspiciatis inventore, eius commodi iure facilis molestiae ut non? Maxime, doloremque.</p>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi dolore accusamus praesentium et facilis dolorem eius deserunt alias explicabo!</h2>
      </div>
      
    </div>
  )
}

export default Card

import React, {useContext} from "react";
import { Link } from "react-router-dom";
import '../component/index.css' 
import { Context } from '../store/appContext'


export const Navbar = () => { 
	  const { store, actions } = useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-light mb-3" >
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7X3Gdn7IimjO94b66fkWTc3sZ_Y9S0FI8ZrDJQnP95Sb7OB3QYOnB32TpN-Jgof8l_U&usqp=CAU" className="navbar-brand mb-0 h1" style={{ height: '250px' }} />

			<div className="ml-auto">



				<div class="dropdown Favoritos">
					<button class="btn btn-danger dropdown-toggle" style={{width:'300px', height:'70px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul class="dropdown-menu dropdown-menu-white" style={{width:'300px'}}>
						{ store.favorito.length > 0 ?( 
							store.favorito.map((fav,index)=>(
                             <li key={index} className="li-none"> 
							 <a className="dropdown-item" href="#"> 
								{fav.name} 
								<button className="quitar btn btn-danger" onClick={()=> actions.removeFavorito(fav.uid)}>X</button> 
								
								
								</a> 

							 </li>




							) )
						 ):( 
							<li className="li-none"> 
							<a className="dropdownitem active" href="#">No hay Favoritos!!</a> 

							</li>
						 )
							
						
						}


					</ul>
				</div>

			</div>
		</nav>
	);
};

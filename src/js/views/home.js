import React,{useState} from "react";
import "../../styles/home.css";
import Planet from "../component/Planet.jsx";
import Vehiculos from "../component/Vehiculos.jsx";
import Personaje from "../component/Personaje.jsx"; 
import '../component/index.css'

export const Home = () => {
 const [activeComponent, setActiveComponent]=useState(null); 

 const components={ 
	personajes:<Personaje/>,  
	planet:<Planet/> ,
	vehiculo:<Vehiculos/>

 } 
 const showComponent=(componentName)=>{ 
	setActiveComponent(componentName);
 }
	
	

	return(
	<div className="text-center mt-5 container">
		<button className="boton-1" onClick={()=>showComponent("personajes")} style={{width:'200px',height:'60px'}}><strong>Characters</strong></button> 
		<button className="boton-2"  onClick={()=>showComponent("planet")} style={{width:'200px',height:'60px'}}><strong>Planets</strong></button>
		<button className="boton-3" onClick={()=>showComponent("vehiculo")} style={{width:'200px',height:'60px'}}><strong>Vehicules</strong></button>


{ 
	activeComponent && components[activeComponent]
}
	</div> 
	)
};

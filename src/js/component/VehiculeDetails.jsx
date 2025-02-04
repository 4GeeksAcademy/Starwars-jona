import React,{useState, useEffect} from 'react' ;
import {useParams} from 'react-router-dom';


const VehiculeDetails = () => { 
     const {id}=useParams(); 
            const [nave,setNave]=useState(null);   
            const fetchNaves = async () =>{ 
                try{  
                    let response= await fetch(`https://www.swapi.tech/api/vehicles/${id}`) 
                    if(!response.ok){ 
                        throw new Error("Error en detalles de Vehiculos"); 
                     } 
                    const data = await response.json(); 
                    setNave(data.result);
        
                }catch(error){ 
                    console.error(error);
                }
            }  
             useEffect(()=>{ 
                   fetchNaves()
            
                },[id]);
            
             
             
             if(!nave){ 
                return <div>Loading.....</div>;
             }
             
  return (
    <div>
            <h1>{nave.properties.name}</h1> 
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt="Vehicle" style={{width:'200px',height:'auto'}}/>
       <p> Se hai copiato il testo da una fonte specifica, ti consiglio di verificare l'ortografia e la punteggiatura prima di incollarlo. A volte, durante la copia e l'incollaggio, possono verificarsi piccoli errori.</p>
       <p>Model: {nave.properties.model}</p> 
       <p>Crew: {nave.properties.crew}</p>
       <p>length: {nave.properties.length}</p>
       <p>Class: {nave.properties.vehicle_class}</p>
       <p>Cargo: {nave.properties.cargo_capacity}</p>

    </div>
  )
}

export default VehiculeDetails
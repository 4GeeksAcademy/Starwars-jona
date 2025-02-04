import React,{useState, useEffect} from 'react' ;
import {useParams} from 'react-router-dom';

const PlanetDetails = () => { 
        const {id}=useParams(); 
        const [mundo,setMundo]=useState(null);  
        
        
        const fetchMundo = async () =>{ 
            try{  
                let response= await fetch(`https://www.swapi.tech/api/planets/${id}`) 
                if(!response.ok){ 
                    throw new Error("Error en detalles de Planetas"); 
                 } 
                const data = await response.json(); 
                setMundo(data.result);
    
            }catch(error){ 
                console.error(error);
            }
        } 
         useEffect(()=>{ 
               fetchMundo()
        
            },[id]);
            if(!mundo){ 
                return <div>Loading.....</div>;
             }
             
  return (
    <div> 
       <h1>{mundo.properties.name}</h1> 
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planets" style={{width:'200px',height:'auto'}}/>
       <p> Se hai copiato il testo da una fonte specifica, ti consiglio di verificare l'ortografia e la punteggiatura prima di incollarlo. A volte, durante la copia e l'incollaggio, possono verificarsi piccoli errori.</p>
       <p>Climate: {mundo.properties.climate}</p> 
       <p>Population: {mundo.properties.population}</p>
       <p>Period: {mundo.properties.orbital_period}</p>
       <p>Rotation: {mundo.properties.rotation_period}</p>
       <p>Diameter: {mundo.properties.diameter}</p>




    </div>  )
}

export default PlanetDetails
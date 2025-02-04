import React,{useState, useEffect} from 'react' ;
import {useParams} from 'react-router-dom';

const CharacterDetails = () => {  
    const {id}=useParams(); 
    const [character,setCharacter]=useState(null); 

    const fetchCharacter = async () =>{ 
        try{  
            let response= await fetch(`https://www.swapi.tech/api/people/${id}`) 
            if(!response.ok){ 
                throw new Error("Error en detalles de Personaje"); 
             } 
            const data = await response.json(); 
            setCharacter(data.result);

        }catch(error){ 
            console.error(error);
        }
    }   
    
  

    useEffect(()=>{ 
       fetchCharacter()

    },[id]);

 
 
 if(!character){ 
    return <div>Loading.....</div>;
 }
 
 
 
    return (
    <div> 
       <h1>{character.properties.name}</h1> 
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="personaje" style={{width:'200px',height:'auto'}}/>
       <p> Se hai copiato il testo da una fonte specifica, ti consiglio di verificare l'ortografia e la punteggiatura prima di incollarlo. A volte, durante la copia e l'incollaggio, possono verificarsi piccoli errori.</p>
       <p>Birth Date: {character.properties.birth_year}</p> 
       <p>Gender: {character.properties.gender}</p>
       <p>Height: {character.properties.height}</p>
       <p>Skin Color: {character.properties.skin_color}</p>
       <p>Eye Color: {character.properties.eye_color}</p>




    </div>
  )
}

export default CharacterDetails;
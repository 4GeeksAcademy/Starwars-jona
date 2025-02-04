import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    const fetchCharacter = async () => {
        try {
            let response = await fetch(`https://www.swapi.tech/api/people/${id}`)
            if (!response.ok) {
                throw new Error("Error en detalles de Personaje");
            }
            const data = await response.json();
            setCharacter(data.result);

        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        fetchCharacter()

    }, [id]);



    if (!character) {
        return <div>Loading.....</div>;
    }



    return (
        <div className='Container' >
            <div className='Cuerpo'>
                
                <div className='foto'>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="personaje" style={{ width: '200px', height: 'auto' }} />
                </div>
                
                <div className='Parrafo'>                    
                     
                     <h1 className='titulo'>{character.properties.name}</h1>

                    <p>Se hai copiato il testo da una fonte specifica,<br/>  ti consiglio di verificare attentamente l'ortografia e la punteggiatura prima di incollarlo nel tuo documento.<br/>  
                        Questo passaggio è fondamentale per garantire che il contenuto sia chiaro e professionale.  <br/> 
                        A volte, durante il processo di copia e incolla,<br/>  possono verificarsi piccoli errori che passano inosservati, come lettere mancanti o segni di punteggiatura errati.  <br/> 
                        Questi dettagli, sebbene possano sembrare insignificanti,<br/> possono influenzare la comprensione del testo da parte del lettore.  <br/> 
                        Inoltre, un testo ben curato riflette la tua attenzione ai dettagli e il tuo impegno nella comunicazione.<br/>  
                         Pertanto, è sempre una buona pratica rileggere il contenuto incollato e apportare le necessarie correzioni</p>
                </div>
            
            </div>
            
            <div className='tarjeta '>
                <p style={{ color: 'red' }}>Birth Date:<br></br> {character.properties.birth_year}</p>
                <p style={{ color: 'red' }}>Gender:<br></br>  {character.properties.gender}</p>
                <p style={{ color: 'red' }}>Height:<br></br> {character.properties.height}</p>
                <p style={{ color: 'red' }} >Skin Color:<br></br>  {character.properties.skin_color}</p>
                <p style={{ color: 'red' }}>Eye Color:<br></br>{character.properties.eye_color}</p>
            </div>



        </div>
    )
}

export default CharacterDetails;
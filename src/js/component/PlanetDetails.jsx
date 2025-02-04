import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlanetDetails = () => {
    const { id } = useParams();
    const [mundo, setMundo] = useState(null);


    const fetchMundo = async () => {
        try {
            let response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
            if (!response.ok) {
                throw new Error("Error en detalles de Planetas");
            }
            const data = await response.json();
            setMundo(data.result);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchMundo()

    }, [id]);
    if (!mundo) {
        return <div>Loading.....</div>;
    }

    return (
        <div className='Container'>
            <div className='Cuerpo'>
                <div className='foto'>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planets" style={{ width: '200px', height: 'auto' }} />
                </div>
                <div className='Parrafo'>
                    <h1 className='titulo'>{mundo.properties.name}</h1>
                    <p>Se hai copiato il testo da una fonte specifica,<br />  ti consiglio di verificare attentamente l'ortografia e la punteggiatura prima di incollarlo nel tuo documento.<br />
                        Questo passaggio è fondamentale per garantire che il contenuto sia chiaro e professionale.  <br />
                        A volte, durante il processo di copia e incolla,<br />  possono verificarsi piccoli errori che passano inosservati, come lettere mancanti o segni di punteggiatura errati.  <br />
                        Questi dettagli, sebbene possano sembrare insignificanti,<br /> possono influenzare la comprensione del testo da parte del lettore.  <br />
                        Inoltre, un testo ben curato riflette la tua attenzione ai dettagli e il tuo impegno nella comunicazione.<br />
                        Pertanto, è sempre una buona pratica rileggere il contenuto incollato e apportare le necessarie correzioni</p>

                </div>
            </div>
            <div className='tarjeta'>
                <p style={{ color: 'red' }}>Climate: <br></br> {mundo.properties.climate}</p>
                <p style={{ color: 'red' }}>Population: <br></br> {mundo.properties.population}</p>
                <p style={{ color: 'red' }}>Period:<br></br> {mundo.properties.orbital_period}</p>
                <p style={{ color: 'red' }}>Rotation:<br></br> {mundo.properties.rotation_period}</p>
                <p style={{ color: 'red' }}>Diameter:<br></br> {mundo.properties.diameter}</p>

            </div>


        </div>)
}

export default PlanetDetails
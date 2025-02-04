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
    <div className='Container'>
    <div className='Cuerpo'>
        <div className='foto'>
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt="Vehicle" style={{width:'200px',height:'auto'}}/>
        </div>
        <div className='Parrafo'>
             <h1 className='titulo'>{nave.properties.name}</h1> 
            <p>Se hai copiato il testo da una fonte specifica,<br />  ti consiglio di verificare attentamente l'ortografia e la punteggiatura prima di incollarlo nel tuo documento.<br />
                Questo passaggio è fondamentale per garantire che il contenuto sia chiaro e professionale.  <br />
                A volte, durante il processo di copia e incolla,<br />  possono verificarsi piccoli errori che passano inosservati, come lettere mancanti o segni di punteggiatura errati.  <br />
                Questi dettagli, sebbene possano sembrare insignificanti,<br /> possono influenzare la comprensione del testo da parte del lettore.  <br />
                Inoltre, un testo ben curato riflette la tua attenzione ai dettagli e il tuo impegno nella comunicazione.<br />
                Pertanto, è sempre una buona pratica rileggere il contenuto incollato e apportare le necessarie correzioni</p>

        </div>
    </div>
    <div className='tarjeta'>
     
        <p style={{ color: 'red' }}>Model:<br></br> {nave.properties.model}</p> 
       <p style={{ color: 'red' }}>Crew:<br></br> {nave.properties.crew}</p>
       <p style={{ color: 'red' }}>length:<br></br> {nave.properties.length}</p>
       <p style={{ color: 'red' }}>Class:<br></br> {nave.properties.vehicle_class}</p>
       <p style={{ color: 'red' }}>Cargo:<br></br> {nave.properties.cargo_capacity}</p>

    </div>


</div>
  )
}

export default VehiculeDetails    


{/* <h1>{nave.properties.name}</h1> 
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt="Vehicle" style={{width:'200px',height:'auto'}}/>
       <p> Se hai copiato il testo da una fonte specifica, ti consiglio di verificare l'ortografia e la punteggiatura prima di incollarlo. A volte, durante la copia e l'incollaggio, possono verificarsi piccoli errori.</p>
       <p>Model: {nave.properties.model}</p> 
       <p>Crew: {nave.properties.crew}</p>
       <p>length: {nave.properties.length}</p>
       <p>Class: {nave.properties.vehicle_class}</p>
       <p>Cargo: {nave.properties.cargo_capacity}</p> */}

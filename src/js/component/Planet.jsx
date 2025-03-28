import React, { useContext, useEffect, UseState } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'


const Planet = () => {
  const { store, actions } = useContext(Context);




  const handlerGetPlanetas = async () => {
    try {
      await actions.planetas()

    } catch (error) {
      console.error(error)
    }
  }
  const planetImages = {
    //Tatooine
    "Tatooine": "https://media.gettyimages.com/id/2048877127/es/vector/artists-impression-of-a-desert-planet.jpg?s=2048x2048&w=gi&k=20&c=hwyj4bFrpZBPwQ6eRHnCRUWchjUAvmsVXK2HIJO-fR4=",

    //Alderaan
    "Alderaan": "https://i.pinimg.com/736x/ff/a7/08/ffa7082c6d85791bee528742ba2deac1.jpg",
    //YAVIN IV
    "Yavin IV": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Q0dVsetCZ3jKVjkm68qtDfg1Ng1m6yfOO88-m65dkAreb0FPe04FXUU&usqp=CAE&s",
    //HOTH
    "Hoth": "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675",
    //Dagobah
    "Dagobah": "https://static.wikia.nocookie.net/esstarwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20061117132132",
    //Bespin
    "Bespin": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iAyrTQN1pcy7SjZqPcyT6HyRZiPOJQrU1r2h9GCn94M19GTw6I7KYLc&s",
    //Endor
    "Endor": "https://static.wikia.nocookie.net/esstarwars/images/5/50/Endor_FFGRebellion.png/revision/latest?cb=20170629163352",
    //Naboo
    "Naboo": "https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307",
    //Corusant
    "Coruscant": "https://static.wikia.nocookie.net/esstarwars/images/8/84/CoruscantGlobeE1.png/revision/latest?cb=20221030204600",
    //Kamino
    "Kamino": "https://static.wikia.nocookie.net/esstarwars/images/5/52/Kamino-DB.png/revision/latest?cb=20160913200828"
  }
  const handleAddFavorite = (item) => {
    actions.addPlanetFavorito(item);
  }

  useEffect(() => {
    handlerGetPlanetas()
  }, [])

  return (
    <div>
      <h1>Planets:</h1>
      <div className='Cuerpo row'>

        {
          store.planets.map((item, index) => {
            return (
              <div className='col-2 Carta' key={index}>
                <h4>{item.name}</h4>
                <img className='image' src={planetImages[item.name]} alt={item.name} style={{ height: 'auto'}} />
                <br></br>
                <Link className=' btn1 btn-primary' to={`/Planet/${item.uid}`}>Learn More</Link>
                <button className='cora btn btn-danger' onClick={() => handleAddFavorite(item)} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </button>

              </div>)
          })

        }
      </div>
    </div >
  )
}

export default Planet
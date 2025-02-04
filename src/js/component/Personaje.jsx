import React, { useContext, UseState, useEffect } from 'react'
import { Context } from '../store/appContext'

import { Link } from 'react-router-dom'

const Personaje = () => {
  const { store, actions } = useContext(Context);

  const handlerGetCharacter = async () => {
    try {
      await actions.personajes() //llamamos al la funcion await que trase actions de flux y personajes que es un array

    } catch (error) {
      console.error(error);
    }
  }

  const charaterImages = {
    "Luke Skywalker": "https://nsabers.es/cdn/shop/articles/opolar_A_super_realistic_scene_of_Luke_Skywalker_holding_his__e21e8637-47d5-413c-b53d-e78c8a275e90_1.png?v=1718860845",
    "C-3PO": "https://www.ecured.cu/images/3/39/250px-C3PO_EP3.jpg",
    "R2-D2": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/08/r2-d2.jpg?tf=3840x",
    "Darth Vader": "https://www.shutterstock.com/image-photo/darth-vader-600nw-2527536349.jpg",
    "Leia Organa": "https://www.ecured.cu/images/f/f3/Leia.jpg",
    "Owen Lars": "https://preview.redd.it/hdwq4sojjfvc1.jpeg?width=640&crop=smart&auto=webp&s=4cfef7d37e7f5c8028ff30c7c22d4352ac48d1a1",
    "Beru Whitesun lars": "https://static.wikia.nocookie.net/esstarwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20171231024525",
    "R5-D4": "https://static.wikia.nocookie.net/esstarwars/images/3/3f/R5D4-AG.png/revision/latest?cb=20240210190020",
    "Biggs Darklighter": "https://static.wikia.nocookie.net/esstarwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20190110214931",
    "Obi-Wan Kenobi": "https://www.alucine.es/wp-content/uploads/2020/08/1-52-600x338.jpg"
  } 

  const handleAddFavorite=(item)=>{ 
    actions.addFavorito(item);
  } 
  // const handleRemoveFavorite=(item)=>{ 
  //   actions.removeFavorito(item.id);
  // }

  useEffect(() => {
    handlerGetCharacter()

  }, [])
  return (
    <div>
      <h1>Personajes: </h1>
      <div className='Cuerpo row'>
        {
          store.personajes.map((item, index) => { 
            // const isFavorite = store.favorito.some(fav => fav.id === item.id);
            return (
              <div className='col-6' key={index}>
                <h4>{item.name}</h4>

                  
                <img className='image' src={charaterImages[item.name]} alt={item.name} style={{ width: '400px', height: 'auto' }} />
                <br></br>
                
                  <Link className=' btn btn-primary' to={`/Character/${item.uid}`}>Learn More</Link>
                  <button className='cora' onClick={()=>handleAddFavorite(item)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg> 
                  </button>
               
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Personaje
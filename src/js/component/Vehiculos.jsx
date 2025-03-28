import React, { useContext, UseState, useEffect } from 'react'
import { Context } from '../store/appContext' 
import { Link } from 'react-router-dom'


const Vehiculos = () => {
  const { store, actions } = useContext(Context);


  const handlerGetVehicule = async () => {
    try {

      await actions.vehicule()

    } catch (error) {
      console.log(error)
    }
  }
  const vehicleImages = {
    "Sand Crawler":"https://static.wikia.nocookie.net/starwars/images/c/c8/Sandcrawler_Obiwan.jpg/revision/latest?cb=20160120184930",
     "X-34 landspeeder":"data:image/jpeg;base64,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",
     "T-16 skyhopper":"https://static.wikia.nocookie.net/esstarwars/images/4/4d/T16skyhopper_negvv.png/revision/latest?cb=20190627000857",
     "TIE/LN starfighter":"https://static.wikia.nocookie.net/starwars/images/9/92/TIEfighter2-Fathead.png/revision/latest?cb=20161109040841",
      "Snowspeeder":"https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C337%2C2048%2C1028",
     "AT-AT":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PlyXjdUF3fUuWFNyNBrHJL2nqCEm9EgNSA&s",
      "TIE bomber":"https://static.wikia.nocookie.net/starwars/images/1/17/TIE_Bomber_BF2.png/revision/latest?cb=20230720014331",
     "AT-ST":"https://www.metalearth.com/content/images/thumbs/0000372_imperial-at-sttrade_1200.png",
      "Storm IV Twin-Pod cloud car":"https://live.staticflickr.com/65535/52758149585_4a519038a0_h.jpg",
      "Sail barge":"https://static.wikia.nocookie.net/starwars/images/d/d4/Sailbarge-chron2.jpg/revision/latest?cb=20091202162508",
} 

const handleAddFavorite=(item)=>{ 
  actions.addVehiFavorito(item);
} 

useEffect(() => {
  handlerGetVehicule()
}, [])

return (
  <div>
    <h1>Vehicules:</h1> 
    <div className='Cuerpo row'>
    {
      store.vehiculos.map((item, index) => {
        return (
          <div className='col-2 Carta' key={index}>
            <h4>{item.name}</h4> 
            <img  className='image' src={vehicleImages[item.name]} alt={item.name} style={{height:'auto'}}/> 
            <br></br>
                  <Link className=' btn1 btn-primary' to={`/Vehicle/${item.uid}`}>Learn More</Link>
            <button className='cora btn btn-danger' onClick={()=>handleAddFavorite(item)}>
                  <svg  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg> 
                  </button>

          </div>)
      })
    } 
    </div>




  </div>
)
}

export default Vehiculos
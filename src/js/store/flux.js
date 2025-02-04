const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			personajes: [],
			vehiculos: [],
            favorito:[]
		},
		actions: {
			personajes: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people")
					if (!response.ok) {//si algo es diferente del .ok entonces tire un nuevo error
						throw new Error("Error en Personajes!");
					}
					let data = await response.json();  //llamamos data y lo traducimos a json
					let store = getStore() //llamamos la funcion getstore
					setStore({ ...store, personajes: data.results })//le decimos que store que tiene  getstore, traiga el array personajes, y sea reamplazado con data. result la propiedad del link



				} catch (error) {
					console.error(error);
				}

			},

			planetas: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets")
					if (!response.ok) {
						throw new Error("Error en planetas!");

					}
					let data = await response.json();
					let store = getStore();
					setStore({ ...store, planets: data.results })

				} catch (error) {
					console.error(error);
				}


			},
			vehicule: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/vehicles")
					if (!response.ok) {
						throw new Error("Error en Vehiculos!");
					}
					let data = await response.json();
					let store = getStore();
					setStore({ ...store, vehiculos: data.results })

				} catch (error) {
					console.error(error);
				}

			}, 
			addFavorito: async (character)=>{ 
               const store=getStore();  
                  let existe=store.favorito.find((ele)=>ele.uid ==character.uid)
			   if(!existe){ //aqui el some es un metodo condicional que trae y revisa si el character.uid y el fav son iguales 
				setStore({...store,favorito:[...store.favorito,character]}); 
			   } 
			   else{ 
				setStore({...store,favorito:store.favorito.filter(fav=>fav.uid !== character.uid)});

			   }
                

			
			
			},  
			addPlanetFavorito: async (planet)=>{ 
				const store=getStore();  
				   let existe=store.favorito.find((ele)=>ele.uid ==planet.uid)
				if(!existe){ //aqui el some es un metodo condicional que trae y revisa si el planet.uid y el fav son iguales 
				 setStore({...store,favorito:[...store.favorito,planet]}); 
				} 
				else{ 
				 setStore({...store,favorito:store.favorito.filter(fav=>fav.uid !== planet.uid)});
 
				}
				 
 
			 
			 
			 },  
			 addVehiFavorito: async (vehi)=>{ 
				const store=getStore();  
				   let existe=store.favorito.find((ele)=>ele.uid ==vehi.uid)
				if(!existe){ //aqui el some es un metodo condicional que trae y revisa si el planet.uid y el fav son iguales 
				 setStore({...store,favorito:[...store.favorito,vehi]}); 
				} 
				else{ 
				 setStore({...store,favorito:store.favorito.filter(fav=>fav.uid !== vehi.uid)});
 
				}
				 
 
			 
			 
			 },
			 
			
			
			removeFavorito: async (characterId,planetId,vehicleId)=>{ 
				const store = getStore(); 
				 setStore({...store,favorito:store.favorito.filter(fav=>fav.uid !== characterId && fav.uid !== planetId && fav.uid !== vehicleId)});

			}
		}
	};
};

export default getState;

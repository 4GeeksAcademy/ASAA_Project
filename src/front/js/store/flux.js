import { Alert } from "bootstrap";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pedidoActualizado: [],
			mesa: [],
			dulces: [],
			cafes: [],
			tes: [],
			otras: [],
			pedidos: [], 
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color   
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;   
				});

				//reset the global store
				setStore({ demo: demo });
			},

			mesas: (id, name, status) => {
                fetch(process.env.BACKEND_URL +'/api/mesa', 
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ id, name, status }),
                })
                  .then(response => response.json())
                  .then(data => {
                    alert('Respuesta del servidor:', data);
                    
                  })
                  .catch(error => {
                    alert('Error al enviar la mesa seleccionada:', error);
                  });
              } ,

			  IncrementarContadorPedido: () => {
                let contador = getStore().contadorPedido
				setStore({contadorPedido: contador += 1})
              } ,

			  DecrementarContadorPedido: () => {
				let contador = getStore().contadorPedido
				setStore({contadorPedido: contador -= 1})
              } ,

			  AñadirPedidoActualizado: (pedidoActualizado) => {
				let pedido = getStore().pedidoActualizado
				pedido.push(pedidoActualizado)
				console.log(pedido)
			  },

			  BorrarPedido: () => {
				let pedido = getStore().pedidoActualizado 
				setStore({pedido : []})
			  },


			  sendPassword: (email) => {
				fetch(process.env.BACKEND_URL + 'send-email',
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email }),
					}
				)
				.then(response => response.json())
				.then((data) => {
					if (data.error) alert(data.error)
					//faltan cosas aqui
					else (
						alert ('Verifica tu bandeja de correo electrónico')
					)
				})
					.catch((error) => {
						alert(error);
					}); 
			},

		}
	};
};

export default getState;

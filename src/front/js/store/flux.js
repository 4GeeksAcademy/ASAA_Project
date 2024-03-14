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

<<<<<<< HEAD
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				const user = sessionStorage.getItem("user");
				const idUser = sessionStorage.getItem("idUser");
				if (token && token != "" && token != undefined) {
					setStore({ token: token, user: user, idUser: idUser })
				}
			},
	
			login: async (credentials) => {
				try {
					console.log(credentials);
					const resp = await fetch(process.env.BACKEND_URL + "/api/login",
						{
							method: "POST", 
							headers: {
								"Content-Type": "application/json",
								
							},
							body: JSON.stringify(credentials) 
						});
					const data = await resp.json();
					console.log(resp.status);
					if (resp.status != 200) return false;
					console.log(data);
					sessionStorage.setItem('token', data.access_token);
					sessionStorage.setItem('user', data.user);
					sessionStorage.setItem('idUser', data.idUser);
					setStore({ token: data.access_token, user: data.user, idUser: data.idUser });
					
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error);
					setStore({ token: null, user: null, idUser: null });
					sessionStorage.removeItem('token');
					sessionStorage.removeItem('user');
					sessionStorage.removeItem('idUser');
				}
			},
	
			  logout: () => {
				  sessionStorage.removeItem('token');
				  sessionStorage.removeItem('user');
				  setStore({
					  token: null,
					  user: null,
				  });
			  },
	
			newUser: async (user) => {
				let data = "";
				console.log(user);
				const respUser = await fetch(process.env.BACKEND_URL + "/api/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user) 
				})
				/*data = await respUser.json();
				console.log(respUser);*/
				if (respUser.status != 200) return false;
				return true;
			},
	
			gotopage: (toPage) => {
				const store = getStore();
				if (!store.token) {
					return "/login";
				}else{
					return toPage;
				}
			},
=======
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

>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
		}
	};
	};

export default getState;

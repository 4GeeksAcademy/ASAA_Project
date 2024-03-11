const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
  
	
  
		syncTokenFromSessionStore: () => {
		  const token = sessionStorage.getItem("token");
		  const user = sessionStorage.getItem("user");
		  const idUser = sessionStorage.getItem("idUser");
		  if (token && token != "" && token != undefined) {
			setStore({ token: token, user: user, idUser: idUser });
		  }
		},
  
		login: async (credentials) => {
		  try {
			console.log(credentials);
			const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify(credentials),
			});
			const data = await resp.json();
			console.log(resp.status);
			if (resp.status != 200) return false;
			console.log(data);
			sessionStorage.setItem("token", data.access_token);
			sessionStorage.setItem("user", data.user);
			sessionStorage.setItem("idUser", data.idUser);
			setStore({
			  token: data.access_token,
			  user: data.user,
			  idUser: data.idUser,
			});
  
			return true;
		  } catch (error) {
			console.log("Error loading message from backend", error);
			setStore({ token: null, user: null, idUser: null });
			sessionStorage.removeItem("token");
			sessionStorage.removeItem("user");
			sessionStorage.removeItem("idUser");
		  }
		},
  
		logout: () => {
		  sessionStorage.removeItem("token");
		  sessionStorage.removeItem("user");
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
			body: JSON.stringify(user),
		  });
		  /*data = await respUser.json();
				  console.log(respUser);*/
		  if (respUser.status != 200) return false;
		  return true;
		},
  
		gotopage: (toPage) => {
		  const store = getStore();
		  if (!store.token) {
			return "/login";
		  } else {
			return toPage;
		  }
		},
	  },
	};
  };
  
  export default getState;
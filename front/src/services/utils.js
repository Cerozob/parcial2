const HOME_API = "https://isis3710parcial2smarthome.herokuapp.com/api/homes";

const getHomes = async () => {
	return fetch(HOME_API).then(getJSON);
};

const getHomeById = async (id) => {
	return fetch(`${HOME_API}/${id}`).then(getJSON);
};

const getJSON = (response) => response.json();

export { getHomes, getHomeById };

const getStorage = () => {
	return localStorage.getItem("i18nextLng") || "cs";
};

export default getStorage;

// Base URL for the Rick and Morty API
const API = 'https://rickandmortyapi.com/api/character/';

// Function to fetch data from the API
const getData = async (id, pageNumber) => {
    let apiURL = API;

    // Determine the API endpoint based on the presence of an id or page number
    if (id != null) {
        apiURL = `${API}${id}`; // Fetch data for a specific character
    } else if (pageNumber != null) {
        apiURL = `${API}?page=${pageNumber}`; // Fetch data for a specific page
    }

    try {
        const response = await fetch(apiURL); // Fetch data from the API
        const data = await response.json(); // Convert the response to JSON
        console.log(data)
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
        return { info: {}, results: [] }; // Return an empty result set on error
    };
    
};

export default getData;
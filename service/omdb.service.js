const API_URL = 'https://www.omdbapi.com/?apikey=2f50d781';

export const getItems = async (query) => {
    try {
        let response = await fetch(`${API_URL}&${query}`);
        if (response.ok) {
          let json = await response.json();
          return json.Search ? json.Search : [];
        }
    } catch (error) {
        alert("HTTP-Error: " + response.status);
        return [];   
    }
}

export const getItem = async (query) => {
    try {
        let response = await fetch(`${API_URL}&${query}`);
        if (response.ok) {
          let json = await response.json();
          return json;
        }
    } catch (error) {
        throw new Error(error); 
    }
}
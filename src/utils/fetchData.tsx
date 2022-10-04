export const exerciseOptions: RequestInit = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY ,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url: URL, options: RequestInit) => {
        const response = await fetch(url, options)
        const data = await response.json();
        return data
}
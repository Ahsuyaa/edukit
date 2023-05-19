export const fetchData = async (API) => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
      return null;
    }
  };
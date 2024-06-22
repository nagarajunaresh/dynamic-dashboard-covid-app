import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/data.json');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;

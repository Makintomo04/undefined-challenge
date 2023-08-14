import axios from "axios";

const apiKey = 'patKX8EGF8lVSd6PB.fafe66c6eba19dcabf9443077f88aff77380621ffa5edffa2ca7960534636b56';
const baseId = 'appA64zd0ezW6TqZ1';
const apiUrl = `https://api.airtable.com/v0/${baseId}/tblom4ULncVNbyXiN`;

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
};


export const getData = async() =>{
  try {
    const response = await axios.get(apiUrl, config);
    return response.data.records;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

import axios from 'axios';

const BASE_URL = 'http://localhost:8888';

export const fetchDestination = async searchItem => {
  const {data} = await axios({
    method: 'get',
    url: `${BASE_URL}/api/search-location`,
    params: {
      subType: 'AIRPORT,CITY',
      keyword: searchItem,
      pageLimit: 20,
      pageOffset: 0,
    },
  });
  return data.data;
};

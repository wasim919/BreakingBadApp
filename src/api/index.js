import axios from 'axios';

const url = `https://www.breakingbadapi.com/api/characters`;

export const fetchCharacters = async (query) => {
  let modifiedUrl = url;
  modifiedUrl = `${url}?name=${query}`;
  const { data } = await axios.get(modifiedUrl);
  return data;
};

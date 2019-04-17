import axios from 'axios';

//  This file's function is getting the data from characters.json, and returning it
// This function is being called in characters.js
const getCharacterData = () => axios.get('../db/characters.json');

export default { getCharacterData };

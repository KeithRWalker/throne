import characterData from '../../helpers/data/characterData';

import util from '../../helpers/util';

import './characters.scss';

let characters = [];

const domStringBuilder = () => {
  let domString = '';
  characters.forEach((char) => {
    domString += `<div class="house-${char.house.toLowerCase()}">`;
    domString += '<div class="img-holder">';
    domString += `<img src=${char.imageUrl} />`;
    domString += '</div>';
    domString += `<h2 class="char-name">${char.name}</h2>`;
    domString += '</div>';
  });
  util.printToDom('characters', domString);
};

//  This function is calling the function from characterData.js
//  If it is sucessful in getting the data it runs ".then"
// If it is unsucessful it runs .catch
const getData = () => {
  characterData.getCharacterData()
    .then((response) => { //  happens when the data is sucessful
      //  This is assigning the json data to characters[]
      const charactersArray = response.data.characters;
      characters = charactersArray;
      domStringBuilder();
    })
    .catch((error) => { //  happens when there is an eeror
      console.error(error);
    });
};

export default { getData };

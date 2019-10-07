import characters_json from '../data/characters.json';


function characters(state = characters_json, action) {
  switch(action.type) {
    case 'ADD_CHARACTER':
      characters = state.filter(item=> item.id!==action.id);
      return characters;
    case 'REMOVE_CHARACTER':
      characters=[...state, addCharacter(action.id)];
      return characters;
    default:
      return state;
  }
}

function addCharacter(id){

  let character=characters_json.find(c=> c.id===id);
  return character;
}


export default characters;
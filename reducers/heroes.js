import characters_json from '../data/characters.json';



function heroes(state = [], action) {
  switch(action.type) {
    case 'ADD_CHARACTER':
      heroes=[...state,createCharacter(action.id)];
      return heroes;
    case 'REMOVE_CHARACTER':
      console.log("roooo",action.id);
      heroes = state.filter(item=> item.id!==action.id);
      return heroes;
    default:
      return state;
  }
}

function createCharacter(id){

  let character=characters_json.find(c=> c.id===id);
  return character;
}

export default heroes;
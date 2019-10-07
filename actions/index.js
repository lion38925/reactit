export function addCharacterById(id){
    const action={
        type: 'ADD_CHARACTER',
        id
    }
    return action;
}

export function removeCharacterById(id){
    console.log('aaaaa',id);
    const action={
        type: 'REMOVE_CHARACTER',
        id
    }
    return action;
}
export const people = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            console.log('add person');
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_PERSON':
            return state.filter(person => person.id !== action.payload.id);
        case 'ADD_GUESTS':
            console.log('add guest');
            return state.map(person => {
                if (person.id === action.payload.id) {
                    return Object.assign({}, person, {
                        guests: person.guests + 1
                    })
                }
                return person;
            });
        case 'REMOVE_GUESTS':
            console.log('remove guests');
            return state.map(person => {
                if(person.id === action.payload.id){
                    return Object.assign({}, person, {
                        guests: person.guests - 1
                    })
                }
                return person;
            });
        case 'TOGGLE_ATTENDING':
            console.log('toggle attending');
            return state.map(person => {
                if(person.id === action.payload.id){
                    return Object.assign({}, person, {
                        attending: !person.attending
                    })
                }
                return person;
            });

        default:
            return state;
    }
}
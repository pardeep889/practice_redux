export default function(state={}, action){
    switch (action.type) {
        case 'GET_ARTISTS_ALL':
            return {...state,artistsList:action.payload}
        case 'GET_ARTISTS':
            return {...state,artistsList:action.payload}
        case 'GET_ARTISTS_DETAIL':
            return {...state,artistData:action.payload}
        case 'LIST_ACTION':
        return {...state,list:action.payload}
        case 'PHOTO':
        return {...state,photo:action.payload}
        case 'ALBUM':
        return {...state,album:action.payload}
        case 'MIX': 
        return {...state,mixdata:action.payload}
        case 'PRACTICE':
        return {...state,practiceData: action.payload}
        case 'LAST':
        return {...state,lastData: action.payload}
        case 'PRACTICE_ONE':
        return {...state,praconedata: action.payload}
        default:
            return state;
    }
}
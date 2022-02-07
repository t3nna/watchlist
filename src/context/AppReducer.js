export default function AppReducer(state, action){
    switch(action.type){
        case 'ADD_FILM_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case 'ADD_FILM_TO_WATCHED':
            return {
                ...state,
                watched: [action.payload, ...state.watched]
            }
        case 'TOGGLE_WATCHLIST_TO_WATCHED':
            return {
                ...state,
                watched: [action.payload, ...state.watched],
                watchlist: state.watchlist.filter(item => item.id !== action.payload.id)
            }
        case 'TOGGLE_WATCHED_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
                watched: state.watched.filter(item => item.id !== action.payload.id)
            }
        case 'DELETE_FILM_FROM_WATCHLIST':
            return{
                ...state,
                watchlist: state.watchlist.filter(item => item.id !== action.payload.id)
            }
        case 'DELETE_FILM_FROM_WATCHED':
            return{
                ...state,
                watched: state.watched.filter(item => item.id !== action.payload.id)
            }

        case 'GET_DESC_ID':
            return {
                ...state,
                description: action.payload
            }
        default:
            return state

    }
}
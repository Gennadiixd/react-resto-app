const initState = {
    menu: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default reducer;
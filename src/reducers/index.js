const initState = {
    menu: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.paylod
            }
        default:
            return state;
    }
}

export default reducer;
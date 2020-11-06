

const displayReducer = (state, action) => {
    switch (action.type) {
        case '1':
            return { ...state, display: 'one selected' }
        case '2':
            return { ...state, display: 'two selected' }
        case '3':
            return { ...state, display: 'three selected' }
        case '4':
            return { ...state, display: 'four selected' }
        default:
            return { ...state, display: 'default' }
    }
}

export default displayReducer;
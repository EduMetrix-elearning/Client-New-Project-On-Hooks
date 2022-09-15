
export const cartCountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'COUNT_CART':
            return action.payload
        default:
            return state
    }
}

export const productCountReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_COUNT':
            return { ...state, [action.payload.dish]: action.payload.count }
        default:
            return state
    }
}
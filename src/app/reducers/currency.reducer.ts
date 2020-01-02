const initialState = []

export function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE': {
            return [
                ...state,
                action.payload
            ]
        }
        default: {
            return state;
        }
    }
}
import { store } from "../store/carStore";

const carReducer = (state = store, action) => {
    switch (action.type) {
        case "BUY_VOLVO":
            // vi vill returnera det nya statet utefter vad vi skickat in
            return Object.assign({}, state, {
                volvo: state.volvo - action.payload
            })
        case "ADD_VOLVO":
            return Object.assign({}, state, {
                volvo: state.volvo + action.payload
            })
        default:
            return state;
    }
}

export default carReducer;
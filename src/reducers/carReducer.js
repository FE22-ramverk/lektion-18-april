import { store } from "../store/carStore";

const carReducer = (state = store, action) => {
    switch (action.type) {
        case "BUY_CAR":
            console.log(action);
            // vi vill returnera det nya statet utefter vad vi skickat in
            if (action.model.toString() == "volvo") {
                return Object.assign({}, state, {
                    volvo: state.volvo - action.payload
                })
            } else if (action.model.toString() == "audi") {
                return Object.assign({}, state, {
                    audi: state.audi - action.payload
                })
            }
        case "ADD_CAR":
            console.log(action);
            return Object.assign({}, state, {
                volvo: state.volvo + action.payload
            })
        default:
            return state;
    }
}

export default carReducer;
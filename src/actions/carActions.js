// action för att köpa bil
// i actions vill vi få in carmodel, antalet
export const buyCar = (carModel, amount) => ({
    type: "BUY_CAR",
    model: carModel,
    payload: amount
})

// action för att lägga till bil
export const addCar = (carModel, amount) => ({
    type: "ADD_CAR",
    model: carModel,
    payload: amount
})
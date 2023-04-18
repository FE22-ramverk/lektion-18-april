// action för att köpa bil
// i actions vill vi få in antalet
export const buyVolvo = (amount) => ({
    type: "BUY_VOLVO",
    payload: amount
})

// action för att lägga till bil
export const addVolvo = (amount) => ({
    type: "ADD_VOLVO",
    payload: amount
})
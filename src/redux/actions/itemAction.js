const addItems = (payload) => ({
    type: "ADD_ITEMS",
    payload,
})

const listItems = () => ({
    type: "LIST_ITEMS",
})

const removeItem = (id) => ({
    type: "REMOVE_ITEM",
    id,
})

const Up = (index) => ({
    type: "ITEM_UP",
    index,
})

const Down = (index) => ({
    type: "ITEM_DOWN",
    index,
})



export {addItems, listItems, removeItem, Up, Down};
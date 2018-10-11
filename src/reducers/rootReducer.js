const initState = {
    posts: [
    {id: '1', title: 'Squirtle Laid and Egg', body: "Hello, World!"},
    {id: '2', title: 'Charmander Laid and Egg', body: "Hello, World!"},
    {id: '3', title: 'Bulbasaur Laid and Egg', body: "Hello, World!"}
    ]
}

const rootReducer = (state = initState, action) =>{
    return state;
}

export default rootReducer
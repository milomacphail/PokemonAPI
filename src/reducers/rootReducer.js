const initState = {
    posts: [
    {id: '1', title: 'Squirtle Laid and Egg', body: "Hello, World!"},
    {id: '2', title: 'Charmander Laid and Egg', body: "Hello, World!"},
    {id: '3', title: 'Bulbasaur Laid and Egg', body: "Hello, World!"}
    ]
}

const rootReducer = (state = initState, action) =>{
    if (action.type === "DELETE_POST") {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state, 
            posts: newPosts
        }
    } 
    return state;
}

export default rootReducer
const initState = {
    posts: [
<<<<<<< HEAD
    {id: '1', title: 'Squirtle Laid an Egg', body: "Squirtle!"},
    {id: '2', title: 'Charmander Laid an Egg', body: "Charmander, char!"},
    {id: '3', title: 'Bulbasaur Laid an Egg', body: "Bullllllllba!"}
=======
    {id: '1', title: 'Squirtle Laid and Egg', body: "Hello, World!"},
    {id: '2', title: 'Charmander Laid and Egg', body: "Hello, World!"},
    {id: '3', title: 'Bulbasaur Laid and Egg', body: "Hello, World!"}
>>>>>>> 65e705461204ba234eb740317c148d05fb2906b1
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
//importing react components

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

//bringing in posts with stylings from homepage
class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } =  this.props;
        const postList  = posts.length ? ( 
            posts.map(post =>{
                return (
                    <div className = "post card" key={post.id}>
                    <img src={Pokeball} alt="A pokeball"/>
                    <div className = "card-content">
                    <Link to={'/' + post.id}>
                    <span className = "card-title red-text">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                    </div>
                    </div>
            )
            })
//if no posts exist; show            
            ): (
            <div className="center"> No posts yet!</div>
            );
            return (
       <div className="container home">
       <h4 className="center">Home</h4>
       { postList }
       </div>
       )
    }
}

const mapStateToProps = (state) => {
    return  {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)

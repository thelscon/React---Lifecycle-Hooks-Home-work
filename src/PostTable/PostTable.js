import React from "react";

import Title from "./Title/Title.js";
import Posts from "./Posts/Posts.js";

import './PostsTable.css' ;

export default class PostTable extends React.Component {
    constructor ( props ) {
        super ( props ) ;

        this.state = {
            posts : [] ,
            deletePost ( ev ) {
                const idElement = ev.target.closest ( 'tr' ).id ;
                const newArr = this.state.posts.filter ( post => `${post.userId}-${post.id}` !== idElement ) ;

                this.setState (
                    {
                        posts : [ ...newArr ]
                    }
                )
            } ,
            editTitle ( ev ) {
                const idElement = ev.target.closest ( 'tr' ).id ;
                const index = this.state.posts.findIndex ( post => `${post.userId}-${post.id}` === idElement ) ;
                this.setState ( prevState => {
                    return {
                        posts : prevState.posts.map ( ( post , ndx , arr ) => {
                            if ( ndx === index ) {
                                return {
                                    userId : post.userId ,
                                    id : post.id ,
                                    title : ev.target.value ,
                                    body : post.body
                                }
                            }
                            else {
                                return post ;
                            }
                        } )
                    }
                }
                )
            }
        }
        this.state.deletePost = this.state.deletePost.bind ( this ) ;
        this.state.editTitle = this.state.editTitle.bind ( this ) ;
    }

    render () {
        return (
            <table className="post-table">
                <Title />
                <Posts { ...this.state } />
            </table>
        )
    }

    componentDidMount () {
        fetch ( 'https://jsonplaceholder.typicode.com/posts' )
            .then ( response => {
                if ( response.ok ) {
                    if ( response.headers.get ( 'content-type' ) === 'application/json; charset=utf-8' ) {
                        return response.json() ;
                    }
                    else {
                        throw new Error ( 'response not JSON-format' )
                    }
                }
                else {
                    throw new Error ( 'error url' )
                }
            }  )
            .then ( json => {
                this.setState ( { posts : Array.from ( json ) } ) ;
            } )
            .catch ( err => { 
                this.setState ( { posts : String ( err ) } ) ;
            } )
    }
}
import React from "react";

import Post from "./Post/Post";

export default class Posts extends React.Component {
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
            }
        }

        this.styleTable = {
            width : '1000px' ,
        }
        
        this.state.deletePost = this.state.deletePost.bind ( this ) ;
    }

    render () {
        return (
            <>
                <table style={this.styleTable}>
                    <tbody>
                        <tr key='userId-id'>
                            <td>userId</td>
                            <td>id</td>
                            <td>title</td>
                            <td>body</td>
                        </tr>
                        <Post { ...this.state }/>
                    </tbody>
                </table>
            </>
        )
    }

    componentDidMount () {
        fetch ( 'https://jsonplaceholder.typicode.com/posts' )
            .then ( responce => responce.json() )
            .then ( json => {
                this.setState ( { posts : Array.from ( json ) } ) ;
            } )
    }
}
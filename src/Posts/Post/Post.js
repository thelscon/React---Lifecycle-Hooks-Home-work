import React from "react";

export default class Post extends React.Component {

    constructor ( props ) {
        super ( props ) ;

        this.styleTd = {
            border : '1px solid black'
        }
    }

    render () {

        const renderArray = ( this.props.posts.length !== 0 ) 
            ? this.props.posts.map ( post => {
                return (
                    <tr  id={`${post.userId}-${post.id}`} key={`${post.userId}-${post.id}`}>
                        <td style={this.styleTd}>{post.userId}</td>
                        <td style={this.styleTd}>{post.id}</td>
                        <td style={this.styleTd}>{post.title}</td>
                        <td style={this.styleTd}>{post.body}</td>
                        <td style={this.styleTd}><button onClick={this.props.deletePost}>Delete</button></td>
                    </tr>
                )
            } )
            : (
                <tr key='none'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
            ) ;

        return (
            <>
                { renderArray }
            </>
        )

    }

}

import React from "react";

export default class Post extends React.Component {

    constructor ( props ) {
        super ( props ) ;

        this.styleTd = {
            border : '1px solid black'
        }

        this.styleTextarea = {
            border : '0' ,
            overflow : 'hidden' ,
            resize : 'none' ,
            outline : 'none' 
        }
    }

    render () {

        const renderArray = ( Array.isArray ( this.props.posts ) ) 
            ? this.props.posts.map ( post => {
                return (
                    <tr  id={`${post.userId}-${post.id}`} key={`${post.userId}-${post.id}`}>
                        <td style={this.styleTd}>{post.userId}</td>
                        <td style={this.styleTd}>{post.id}</td>
                        <td style={this.styleTd}>
                            <textarea style={this.styleTextarea} onInput={this.props.editTitle} value={post.title} />
                        </td>
                        <td style={this.styleTd}>{post.body}</td>
                        <td style={this.styleTd}><button onClick={this.props.deletePost}>Delete</button></td>
                    </tr>
                )
            } )
            : (
                <tr>
                    <td>{this.props.posts}</td>
                </tr>
            ) ;

        return (
            <>
                { renderArray }
            </>
        )

    }

}

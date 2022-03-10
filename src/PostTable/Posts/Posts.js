import React from "react";

import PostTitle from "./PostTitle/PostTitle";
import PostAction from "./PostAction/PostAction";
import './Posts.css' ;

export default class Posts extends React.Component {

    render () {
        const renderArray = this.props.posts.map ( post => {
            return (
                <tr id={`${post.userId}-${post.id}`} key={`${post.userId}-${post.id}`}>
                    <td className="post">{post.userId}</td>
                    <td className="post">{post.id}</td>
                    <td className="post">
                        <PostTitle onInputHandler={this.props.editTitle} post={post.title} />
                    </td>
                    <td className="post">{post.body}</td>
                    <td className="post">
                        <PostAction onClickHandler={this.props.deletePost} />
                    </td>
                </tr>
            )
        } )

        return (
            <tbody>
                { renderArray }
            </tbody>
        )

    }

}

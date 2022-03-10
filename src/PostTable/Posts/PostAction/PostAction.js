import React from "react";

import './PostAction.css' ;

export default class PostAction extends React.Component {
    render () {
        return (
            <button className="post__item__delete" onClick={this.props.onClickHandler}>
                Delete
            </button>
        )
    }
}
import React from "react";

import './PostTitle.css';

export default class PostTitle extends React.Component {
    render () {
        return (
            <>
                <textarea
                    className="post__item__title" 
                    onInput={this.props.onInputHandler} 
                    value={this.props.post} />
            </>
        )
    }
}
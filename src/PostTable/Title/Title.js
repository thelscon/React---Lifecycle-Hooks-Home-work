import React from "react";

import "./Title.css" ;

export default class Title extends React.Component {
    constructor ( props ) {
        super ( props ) ;

        this.styleTh = {
            border : '1px solid #E8E8E8' ,
            padding : '10px' ,
            verticalAlign : 'middle' ,
            color : "#373F41"
        }
    }
    render () {
        return (
            <thead>
                <tr className="header">
                    <th className="header__item">userId</th>
                    <th className="header__item">id</th>
                    <th className="header__item">title (edit)</th>
                    <th className="header__item">body</th>
                    <th className="header__item header__item-action">action</th>
                </tr>
            </thead>
        )
    }
}
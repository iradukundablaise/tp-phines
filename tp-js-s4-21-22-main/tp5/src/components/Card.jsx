import React from "react";
import { UNKNOWN_SRC } from "../data/cardData.js";
import "../assets/style/card.css";

export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShowing: false
        }
        this.onClickEvent = this.onClickEvent.bind(this);
    }

    onClickEvent(){
        if(!this.state.isShowing){
            this.setState({ 
                isShowing: true,
            });
            this.props.onCardClick();
        }
    }

    render(){
        const image = <img src={ this.state.isShowing ? this.props.src : UNKNOWN_SRC }/>;
        return (
            <div className="card" onClick={ e => this.onClickEvent() }>
                {image}
            </div>
        )
    }
}
import React from "react";
import Card from "./Card.jsx";
import { shuffle } from "../scripts/utils.js";
import "../assets/style/cardBoard.css";

export default class CardBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nbPaires: 4
        }
    }

    setNbPaires(n){
        this.setState({ nbPaires: n });
    }

    render(){
        const cardsList = this.props.cards.map( (card, index) => (
            <Card 
                src={card.src}
                key={index}
                description={card.description}
                onCardClick={ () => this.props.setLastCard(card) }/>
        ));

        return (
            <div className="cardBoard">
                {cardsList}
            </div>
        )
    }
}
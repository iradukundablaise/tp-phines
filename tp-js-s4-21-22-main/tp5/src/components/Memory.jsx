import React from "react";
import CardBoard from "./CardBoard.jsx";
import "../assets/style/memory.css";
import {UNKNOWN_SRC, cardData} from '../data/cardData.js';
import { shuffle } from "../scripts/utils.js";
import InfoZone from "./InfoZone.jsx";

export default class Memory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cards: [],
            nbrePaires: 4,
            nbreEssaies: 0,
            nbreFlips: 0,
            lastCard: {},
            flippedCards: []
        }
    }

    componentDidMount(){
        this.setCards();
    }

    setCards(){
        const singleCards = shuffle(cardData).slice(0, this.state.nbrePaires);
        const cards = shuffle([...singleCards, ...singleCards]);
        this.setState({cards});
    }

    onCardClick(card){
        if(card.description === this.state.lastCard.description){
            this.setState({ nbreFlips: this.state.nbreFlips+1 });
        }
        this.setState({ lastCard: card });
    }

    render(){
        return (
            <div>
                <h1>Memory Game</h1>
                <CardBoard 
                    cards={this.state.cards} 
                    nbrePaires={this.state.nbrePaires}
                    flippedCards={this.state.flippedCards}
                    onCardClick={ card => this.onCardClick(card) }/>

                <InfoZone
                    lastCard={this.state.lastCard}
                    nbreFlips={this.state.nbreFlips}
                    nbrePaires={this.state.nbrePaires}
                    nbreEssaies={this.state.nbreEssaies}/>
            </div>
        )
    }
}
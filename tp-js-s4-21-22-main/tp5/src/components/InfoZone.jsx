import React from "react";
import "../assets/style/infoZone.css"

export default class InfoZone extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const remaining = this.props?.nbrePaires-this.props?.nbreFlips;
        return (
            <div className="infoZone">
                <div>
                    <span className="remaining">
                        encore {remaining} paire{remaining > 1 ? "s" : ""}
                    </span>
                </div>
                <div>
                    <span className="last">{ this.props?.lastCard?.description || '?' }</span>
                </div>
                <div>
                    <span className="flips">{this.props?.nbreFlips || 0}</span>
                </div>
            </div>
        )
    }
}
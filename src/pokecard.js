import React, {Component} from 'react';
import './cards.css'
const Poke_API = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/'
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number );

class Pokecard extends Component{
    render(){

        let imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`
        return(
        <div className='Pokecard'>
            <h1 className='Pokecard-title'>{this.props.name}</h1>
            <img src={imgSrc} alt={this.props.name}/>
            <div className='Pokecard-data'>Type : {this.props.type}</div>
            <div className='Pokecard-data'>Exp : {this.props.exp}</div>
        </div>
        );
    }
}

export default Pokecard;
import React, { Component } from 'react'

class Pokegame extends Component{

    static defaultProps ={
        pokemon : [
            { id : 4 , name : 'Charmander', type: 'fire', base_experience : 62},
            { id : 7 , name : 'Squirtle', type: 'water', base_experience : 63},
            { id : 11 , name : 'Metapod', type: 'bug', base_experience : 72},
            { id : 12 , name : 'Butterfree', type: 'flying', base_experience : 178},
            { id : 25 , name : 'Pikachu', type: 'electric', base_experience : 112},
            { id : 39 , name : 'Jigglypuff', type: 'normal', base_experience : 95},
            { id : 94 , name : 'Gengar', type: 'poison', base_experience : 225},
            { id : 133 , name : 'Eevee', type: 'normal', base_experience : 65},
        ]
    };

    render(){
        let hand1=[];
        let hand2=[...this.props.pokemon];
        while(hand1.length<hand2.length){
            let randIdx = Math.floor(Math.random()*hand2.length);
            let randPokemon = hand2.splice(randIdx,1)[0];
            hand1.push(randPokemon);
        }
        console.log(hand1)
        console.log(hand2)
        return(
            <div>
                <h1>Pokegame</h1>
            </div>
        )
    }
}

export default Pokegame
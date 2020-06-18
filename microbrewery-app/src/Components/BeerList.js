import React from 'react';
import BeerCard from './BeerCard.js';

const BeerList = props => {
    const { beers } = props
    return (
        <div>
            {beers.map(beer => {
                return <BeerCard key={beer.id} beer={beer}/>
            })}
        </div>
    )
}


export default BeerList 
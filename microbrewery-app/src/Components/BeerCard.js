import React from 'react';

export default function BeerCard (props) {
    const { name, address, phoneNumber, url } = props.beer

    if(!props.beer) {
        return <h3>Working on fetching your beers....</h3>
    }

    return (
        <div>
            <h2>Name: {props.beer.name}</h2>
            <p>Address: {props.beer.address}</p>
            <p>Phone Number: {props.beer.phoneNumber}</p>
            <a href={props.beer.url}>Link To Website!</a>
        </div>
    )
}
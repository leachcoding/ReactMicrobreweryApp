import React from 'react';

export default function BeerCard (props) {
    const { name, address, phoneNumber, url } = props.beer

    if(!props.beer) {
        return <h3>Working on fetching your beers....</h3>
    }

    return (
        <div>
            <h2>Name: {props.beer.name}</h2>
            <p>Address: <br/> {props.beer.street} <br/> {props.beer.city} <br/> {props.beer.state} <br/> {props.beer.postal_code} <br/> {props.beer.country}</p>
            <p>Phone: {props.beer.phone}</p>
            <a href={props.beer.website_url}>Link To Website!</a>
        </div>
    )
}
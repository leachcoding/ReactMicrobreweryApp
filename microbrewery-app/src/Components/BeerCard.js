import React from 'react';

export default function BeerCard (props) {
    const { name, address, phoneNumber, url } = props.beers

    if(!props.beers) {
        return <h3>Working on fetching your beers....</h3>
    }

    return (
        <div>
            <h2>Name: {props.beers.name}</h2>
            <p>Address: {props.beers.address}</p>
            <p>Phone Number: {props.beers.phoneNumber}</p>
            <p>LINK: {props.beers.url}</p>
        </div>
    )
}
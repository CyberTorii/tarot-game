import React from 'react';
import '../styles/Game.css';

export default function FoldCards(props) {
    const style = {
        maxWidth: `calc(85% / ${props.fold.length})`,
    };

    const cardImages = props.fold.reduce((images, card) => {
        images[card] = require(`../assets/images/cards/${card}.jpg`);
        return images;
    }, {});

    return (
        <div className="last-fold-container">
            {props.fold.map((card, index) => (
                <div key={card}  style={style}>
                    <img alt={card} src={cardImages[card]} />
                </div>
            ))}
        </div>
    );
};

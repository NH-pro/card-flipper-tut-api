import { Deck } from "../model/deck";
import { Card } from "../model/card";

export interface NextCard {
    card?: Card;
    cardsRemaining: number;
    errorMsg?: string;
}
 
let deck: Deck;
let flipped: Deck;

export const shuffleDeck = () => {
    deck = new Deck();
    deck.shuffleDeck();
    flipped = new Deck(true);
}

export const drawCard = (): NextCard => {
    if(flipped.cardsRemainging() === 52) {
        return {
            errorMsg: 'All cards have been flipped, shuffle up!',
            cardsRemaining: deck.cardsRemainging()
        }
    }
    const cardDrawn: Card = deck.drawOffTop();
    flipped.putOnTop(cardDrawn);

    return {
        cardsRemaining: deck.cardsRemainging(),
        card: cardDrawn,
    };
}

export const unflipCard = (): NextCard => {
    if (flipped.cardsRemainging() === 0) {
        return {
            errorMsg: 'No cards remaining',
            cardsRemaining: deck.cardsRemainging(),
        };
    }
    const cardToUnflip: Card = flipped.drawOffTop();
    deck.putOnTop(cardToUnflip);

    return {
        cardsRemaining: deck.cardsRemainging(),
        card: flipped.showTopDiscardPile() as Card
    }
}
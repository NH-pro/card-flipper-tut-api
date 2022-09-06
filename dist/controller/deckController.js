"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unflipCard = exports.drawCard = exports.shuffleDeck = void 0;
var deck_1 = require("../model/deck");
var deck;
var flipped;
var shuffleDeck = function () {
    deck = new deck_1.Deck();
    deck.shuffleDeck();
    flipped = new deck_1.Deck();
};
exports.shuffleDeck = shuffleDeck;
var drawCard = function () {
    if (flipped.cardsRemainging() === 52) {
        return {
            errorMsg: 'All cards have been flipped, shuffle up!',
            cardsRemaining: deck.cardsRemainging()
        };
    }
    var cardDrawn = deck.drawOffTop();
    flipped.putOnTop(cardDrawn);
    return {
        cardsRemaining: deck.cardsRemainging(),
        card: cardDrawn,
    };
};
exports.drawCard = drawCard;
var unflipCard = function () {
    if (flipped.cardsRemainging() === 0) {
        return {
            errorMsg: 'No cards remaining',
            cardsRemaining: deck.cardsRemainging(),
        };
    }
    var cardToUnflip = flipped.drawOffTop();
    deck.putOnTop(cardToUnflip);
    return {
        cardsRemaining: deck.cardsRemainging(),
        card: cardToUnflip,
    };
};
exports.unflipCard = unflipCard;

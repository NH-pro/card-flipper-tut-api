export enum Suit {
    SPADES = 'spades',
    CLUBS = 'clubs',
    DIAMONDS = 'diamonds',
    HEARTS = 'hearts'
}

export class Card {
    suit: Suit;
    sequence: number;
    name: string;

    constructor(suit: Suit, sequence: number) {
        this.suit = suit;
        this.sequence = sequence;
        this.name = '';
    }

    generateName = (): void => {
        switch (this.sequence) {
            case 11:
                this.name = `jack_of_${this.suit}`;
                break;
            case 12:
                this.name = `queen_of_${this.suit}`;
                break;
            case 13:
                this.name = `king_of_${this.suit}`;
                break;
            case 14:
                this.name = `ace_of_${this.suit}`;
                break;
            default:
                this.name = `${this.sequence}_of_${this.suit}`;
        }
    }
}
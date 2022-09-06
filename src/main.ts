import express, { Request, Response} from 'express';
import cors from 'cors';
import { Card } from './model/card';
import { drawCard, NextCard, shuffleDeck, unflipCard } from './controller/deckController';
import { flatMap } from 'lodash';


const PORT = 3001;
const app = express();

app.use(cors());

interface CardData {
    card?: Card;
    cardsRemaining: number;
}

interface CardResponseObject {
    msg: string;
    error: boolean;
    cardData?: CardData
}

app.post(
    '/api/new-deck',
    (
        _req: Request,
        res: Response<CardResponseObject>
    ) => {
        try {
            shuffleDeck();
            res.status(200).send({
                msg: "Deck shuffled, ready for some flippin",
                error: false,
            });
        } catch (error) {
            res.status(500).send({
                msg: "An error occurrred when shuffleing the deck",
                error: true,
            });
        }
})

app.get(
    `/api/next-card`,
    (
        _req: Request, // Unused variable
        res: Response<CardResponseObject>
    ): Response<CardResponseObject> => {
        try {
            const nextCard: NextCard = drawCard();
            if(nextCard.errorMsg) {
                return res.send({
                    msg: nextCard.errorMsg,
                    error: false,
                    cardData: { cardsRemaining: nextCard.cardsRemaining },
                });
            }
            return res.status(200).send({
                msg: 'Your next card is ...',
                error: false,
                cardData: nextCard
            })
        } catch (error) {
            console.log(`An error occurred drawing the next card. ${error}`);
            return res.status(500).send({
                msg: `An error occurred drawing the next card. ${error}`,
                error: true,
            });
        }
    }
);

app.put(
    '/api/unflip-card',
    (
        _req: Request,
        res: Response<CardResponseObject>
    ): Response<CardResponseObject> => {
        try {
            const unflippedCard: NextCard = unflipCard();
            if (unflippedCard.errorMsg) {
                return res.send({
                    msg: unflippedCard.errorMsg,
                    error: false,
                    cardData: { cardsRemaining: unflippedCard.cardsRemaining },
                })
            }
            return res.status(200).send({
                msg: 'You just put this card on the drop pile',
                error: false,
                cardData: unflippedCard,
            })
        } catch (error) {
            console.log(`An error occurred flippinh the next card. ${error}`);
            return res.status(500).send({
                msg: `An error occurred flipping the next card. ${error}`,
                error: true,
            }); 
        }
    })

app.listen(PORT, () => {
    console.log(`Flipping cards on ${PORT}`);
});

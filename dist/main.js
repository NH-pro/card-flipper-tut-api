"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var deckController_1 = require("./controller/deckController");
var PORT = 3001;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.post('/api/new-deck', function (_req, res) {
    try {
        (0, deckController_1.shuffleDeck)();
        res.status(200).send({
            msg: "Deck shuffled, ready for some flippin",
            error: false,
        });
    }
    catch (error) {
        res.status(500).send({
            msg: "An error occurrred when shuffleing the deck",
            error: true,
        });
    }
});
app.get("/api/next-card", function (_req, // Unused variable
res) {
    try {
        var nextCard = (0, deckController_1.drawCard)();
        if (nextCard.errorMsg) {
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
        });
    }
    catch (error) {
        console.log("An error occurred drawing the next card. ".concat(error));
        return res.status(500).send({
            msg: "An error occurred drawing the next card. ".concat(error),
            error: true,
        });
    }
});
app.put('/api/unflip-card', function (_req, res) {
    try {
        var unflippedCard = (0, deckController_1.unflipCard)();
        if (unflippedCard.errorMsg) {
            return res.send({
                msg: unflippedCard.errorMsg,
                error: false,
                cardData: { cardsRemaining: unflippedCard.cardsRemaining },
            });
        }
        return res.status(200).send({
            msg: 'You just put this card on the drop pile',
            error: false,
            cardData: unflippedCard,
        });
    }
    catch (error) {
        console.log("An error occurred flippinh the next card. ".concat(error));
        return res.status(500).send({
            msg: "An error occurred flipping the next card. ".concat(error),
            error: true,
        });
    }
});
app.listen(PORT, function () {
    console.log("Flipping cards on ".concat(PORT));
});

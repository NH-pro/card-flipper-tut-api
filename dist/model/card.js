"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.Suit = void 0;
var Suit;
(function (Suit) {
    Suit["SPADES"] = "spades";
    Suit["CLUBS"] = "clubs";
    Suit["DIAMONDS"] = "diamonds";
    Suit["HEARTS"] = "hearts";
})(Suit = exports.Suit || (exports.Suit = {}));
var Card = /** @class */ (function () {
    function Card(suit, sequence) {
        var _this = this;
        this.generateName = function () {
            switch (_this.sequence) {
                case 11:
                    _this.name = "jack_of_".concat(_this.suit);
                    break;
                case 12:
                    _this.name = "queen_of_".concat(_this.suit);
                    break;
                case 13:
                    _this.name = "king_of_".concat(_this.suit);
                    break;
                case 14:
                    _this.name = "ace_of_".concat(_this.suit);
                    break;
                default:
                    _this.name = "".concat(_this.sequence, "_of_").concat(_this.suit);
            }
        };
        this.suit = suit;
        this.sequence = sequence;
        this.name = '';
    }
    return Card;
}());
exports.Card = Card;

// Variable
const stringVar: string = 'wefwef';
const numVar: number = 3;
const boolVar: boolean = true;
const arrayVar: string[] = ['Hi', 'Wow'];
const mixArrayVar: Array< string | number> = [12, 3, 'Harry', 'Hi'];

// Object Variables
const objVar: WowBoom = {wow: 'string', boom: 'shakalaka', numberOfBooms: 45};

// Types and Interfaces
interface WowBoom {
    wow: string;
    boom: string;
    numberOfBooms: number;
}

type WowBoomTwo = {
    wow: string;
    boom: string;
    numberOfBooms: number;  
}

// Functions
const Logger = (num: number, str: string, obj: WowBoom): void => {
    console.log(num, str, obj.numberOfBooms);
};

Logger(324, 'Wow', objVar);

// Enums
enum Suit {
    DIAMONDS,
    SPADES,
    CLUBS,
    HEARTS
}

enum SuitWithString {
    DIAMONDS = 'diamonds',
    SPADES = 'spades',
    CLUBS = 'clubs',
    HEARTS = 'hearts'
}

const heart = SuitWithString.HEARTS;

if(heart === SuitWithString.HEARTS) {
console.log(SuitWithString.HEARTS)

}

// Generics

// Castings
    // Logger(234, 'weg', {})
Logger(234, 'weg', {} as WowBoom)


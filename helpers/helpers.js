export const createDeck = async () => {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    let deck = [];
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); 
        }
    }
    return await shuffleDeck(deck)
}

// Shufle the deck of cards
const shuffleDeck = async (deck) => {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); 
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}

// Get value of card
export const getValue =  async (card) => {
    if ( card != undefined ) {
        let data = card.split("-");
        let value = data[0];
    
        if (isNaN(value)) { 
            if (value == "A") {
                return 11;
            }
            return 10; 
        }
        return parseInt(value);
    }
    return card
}

// Check winner
export const check_21 = async (user_1, user_1_sum, user_2, user_2_sum,  ) => {
    if ( user_1_sum === 21 && user_1_sum != user_2_sum) {
        return user_1
    }
    if ( user_2_sum === 21 && user_2_sum != user_1_sum) {
        return user_2
    }
    return null
}
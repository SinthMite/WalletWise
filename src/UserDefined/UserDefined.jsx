export default class UserAccount {
    constructor(userName) {
        this.userName = userName;
        this.balance = 0;
        this.Income = 0;
        this.transactions = [];
        this.id = 0;
        this.cards = [
            { type: "discover", cardBalance: 0, LastFourDigits: 0 },
            { type: "visa", cardBalance: 0, LastFourDigits: 0 },
            { type: "mastercard", cardBalance: 0, LastFourDigits: 0 },
            { type: "amex", cardBalance: 0, LastFourDigits: 0 }
        ];
    }

    getRemaining() {
        return this.Income - this.getBalance();
    }

    getIncome() {
        return this.Income;
    }

    getUserName() {
        return this.userName;
    }

    getBalance() {
        return this.transactions.reduce((total, transaction) => total + transaction.amount, 0) +
            this.cards.reduce((total, card) => total + card.cardBalance, 0);
    }

    getTransactions() {
        return this.transactions;
    }

    getCards() {
        return this.cards;
    }

    setIncome(Income) {
        this.Income = Income;
    }

    setUserName(userName) {
        this.userName = userName;
    }

    setTransactions(transactions) {
        this.transactions = transactions;
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    addCard(card) {
        this.cards.push(card);
    }
}

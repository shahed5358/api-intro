// Javascript Object Notation= json
// JSON
const user = { id: 11, name: 'shahed', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'alia store',
    address: 'ranbir rood',
    profit: 5000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'alia batt',
        profession: 'acting',
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
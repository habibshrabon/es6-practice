const person = {name: 'Jack Willam', age: 17, job: 'facebook',gfName: 'Ema watson', address: 'kochu khet', phone: '01711124578', friends: ['Tom hackers', 'tom cruse']};

//this property style is distructure
const { phone, gfName, address} = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone ,address);
// console.log(gfName, phone);


const friends = ['shakib khan', 'Arman khan', 'Amir khan', 'Salman khan', 'sharuk khan'];
const [chotoFriend, nextFriend, ...restFriend] = friends;

console.log(restFriend);

//another rules
const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'shimul'
    }
}
const {leader} = complexObject.info;
console.log(leader);
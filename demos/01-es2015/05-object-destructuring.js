const john = {
    name: 'John Doe',
    age: 32,
    contacts: [
        'john.doe@gmail.com',
        'john.doe@example.com'
    ],
    address: {
        first_line: '6/1 Templeton',
        second_line: 'Brrokfield',
        city: 'New York'
    }
};

const { name, age, contacts : [ , secondaryContact ], address : { city : permanentResidence } } = john;
console.log( name, age, secondaryContact, permanentResidence );
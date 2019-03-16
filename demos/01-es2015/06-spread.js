// ... is the spread operator - it is applied on arrays and objects
var arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];

// ...arr1 => 1, 2, 3
// ...arr2 => 4, 5, 6
var arr3 = [ ...arr1, ...arr2 ];
console.log( arr3 );

const arr = [ 5, 0, 7, 9, 22, 6, 4 ];
console.log( Math.max( ...arr ) );

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

const johnCopy = { // creates a shallow copy (primitives like number, boolean and string are copied by value; objects, arrays, function are copied by reference)
    ...john
};

johnCopy.age++;
johnCopy.contacts.push( 'john.doe@yahoo.com' );

console.log( 'john = ', john );
console.log( 'johnCopy = ', johnCopy );

const johnDeepCopy = {
    ...john,
    contacts: [...john.contacts],
    address: { ...john.address }
};

johnDeepCopy.contacts.push( 'john.doe@xyz.com' );
console.log( 'johnDeepCopy = ', johnDeepCopy );
console.log( 'john = ', john );
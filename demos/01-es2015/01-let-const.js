var x = 10;
let y = 10;

var x = 20; // redeclaration allowed
// let y = 20; // error - good thing

for( var i = 0; i < 10; i++ ) {
    console.log( 'inside loop i = ', i );
}
console.log( 'outside loop i = ', i );

for( let j = 0; j < 10; j++ ) {
    console.log( 'inside loop j = ', j );
}
// console.log( 'outside loop j = ', j ); // error

const z = 10;
console.log( 'z = ', z );

// z = 20; // error - reassignment to const variables is not allowed
console.log( 'z = ', z );

const john = {
    name: 'John',
    age: 32
};

john.name = 'Jonathan';
console.log( john );  

john = { // error - reassignment not allowed for const variable
    name: 'Jonathan Doe',
    age: 32
};
function sum1( x, y ) {
    return x + y;
} // es5- syntax

const sum2 = function( x, y ) {
    return x + y;
}; // es5- syntax

// arrow function
const sum3 = ( x, y ) => {
    return x + y;
};

// single line in function body and that is a return statement - omit braces abd return keyword
const sum4 = ( x, y ) => x + y;

// single argument - parenthesis around the argument is not required
const square = x => x * x;

console.log( sum4( 10, 20 ) );
console.log( square( 12 ) );
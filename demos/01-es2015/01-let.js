// var x = 1;
// let y = 1;

// no block scope
for( var x = 1; x < 10; x++ ) {
    console.log( 'x = ', x );
}

console.log( '[outside loop] x = ', x );

for( let y = 1; y < 10; y++ ) {
    console.log( 'y = ', y );
}

console.log( '[outside loop] y = ', y );
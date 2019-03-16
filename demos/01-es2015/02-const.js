const x = 1;
// x = 2;

const obj = { // properties can be modified
    x: 1
};
console.log( obj );
obj.x = 2; // allowed
console.log( obj );

obj = { // error
    x: 2
};
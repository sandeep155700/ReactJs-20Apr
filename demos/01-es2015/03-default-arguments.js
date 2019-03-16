function greet( message = 'Hello', name = 'World' ) {
    console.log( message + ' ' + name + '!' );
}

greet( 'Good morning', 'John' );
greet( 'Good morning' ); // name = undefined
greet( undefined, 'John' ); // message is undefined and hence will be assined Hello
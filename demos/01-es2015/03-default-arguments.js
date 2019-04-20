function logDescription( name = 'John', city = 'Bangalore' ) {
    // if( city === undefined ) {
    //     city = 'Bangalore';
    // }

    console.log( `The person ${name} is from ${city}` );
}

logDescription( 'John', 'Bangalore' );
logDescription( 'Mary', 'Chennai' );
logDescription( 'David' );
logDescription();
logDescription( undefined, 'New Delhi' );
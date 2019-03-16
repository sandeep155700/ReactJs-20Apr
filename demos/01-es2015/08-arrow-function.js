function foo() {
    console.log( 'context of foo = ', this );
    
    function bar() {
        console.log( 'context of bar = ', this );
    }

    bar();

    // an arrow function gets its context form the enclosing scope (foo scope in this case)
    const baz = () => {
        console.log( 'context of baz = ', this );
    };

    baz();
}

foo.call( "hello" );
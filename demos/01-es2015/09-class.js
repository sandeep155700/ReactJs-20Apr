class Person {
    // name; // works in TypeScript - not yet supported in plain JS
    // showTimes: [];
    
    constructor( name, age ) {
        // context is the newly created (empty) object
        console.log( 'context of constructor = ', this );
        
        // add 2 peroperties name and age and set to the values passed
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++; // context of methods is also the calling object
    }
}

const john = new Person( 'John Doe', 32 ); // empty object
john.celebrateBirthday();
console.log( john );

// Exercise: Create a Movie class, with cast and showTimes: [ '10:00 am', '1:10 pm', '7:30 pm' ]. A method addShowTime( '10:30 pm' ) when called adds '10:30 pm' to showTimes array

// default constructor passes up all it receives to the super class (Person) constructor
class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );
        
        this.role = role;
        this.dept = dept;
    }
}

const mary = new Employee( 'Mary Doe', 45, 'Web Developer', 'IT' );
mary.celebrateBirthday();
console.log( 'mary = ', mary );
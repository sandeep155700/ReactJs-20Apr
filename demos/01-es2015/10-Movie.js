class Movie {
    constructor( name, cast, showTimes ) {
        this.name = name;
        this.cast = cast;
        this.showTimes = showTimes;
    }

    addShowTime( showTime ) {
        this.showTimes.push( showTime );
    }
}

const badla = new Movie( 'Badla', [ 'Amitabh', 'Taapsee' ], [ '10:00 am', '12:30 pm' ] );
badla.addShowTime( '4:00 pm' );
console.log( badla );
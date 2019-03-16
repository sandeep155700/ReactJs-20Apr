var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// const first = days[0], second = days[1], fifth = days[4] || 'Holiday', sixth = days[5] || 'Holiday';

const [ first, second, , , fifth = 'Holiday', sixth = 'Holiday' ] = days;
console.log( first, second, fifth, sixth );
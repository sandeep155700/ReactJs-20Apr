const name = 'John', city = 'Bangalore';
// const description = "The person " + name + " is from " + city;
const description = `The person ${name} is from ${city}`;
console.log( description );

const john = {
    name: 'Jonathan Doe',
    age: 32,
    city: 'Bangalore'
};

const tr1 = '<tr>' +
    '<td>' + john.name + '</td>' +
    '<td>' + john.age + '</td>' +
    '<td>' + john.city + '</td>' +
'</tr>';

const tr2 = `
    <tr>
        <td>${john.name.toUpperCase()}</td>
        <td>${john.age}</td>
        <td>${john.city}</td>
    </tr>
`;

console.log( tr1 )
console.log( tr2 )
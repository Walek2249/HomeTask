import { User } from './HT13.1';

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function getDossier(person: Person) {
    let status: string;
    if ('role' in person) {
        status = person.role;
    } else {
        status = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${status}`);
}

persons.forEach(getDossier);
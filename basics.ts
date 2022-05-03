// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

import { createTrue } from "typescript";

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = '12';

let isInstructor: boolean;

isInstructor = true;

// More Compex Types

let hobbies: string[];

hobbies = ['sports', 'cooking', 'twelve'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// }

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 1234;

// Functions and types

function add(a: number, b: number) {
    return a + b;
};

function printOutput(value: any) {
    console.log(value);
};

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);  // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');
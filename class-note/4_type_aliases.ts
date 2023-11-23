// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

let jhin: Person = {
    name: '진',
    age: 30
}

type Mystring = string;
let str: Mystring = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
    
}
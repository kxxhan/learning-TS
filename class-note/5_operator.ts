// Union Type
// 하나 이상의 타입을 쓸 수 있게함
let v0110: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        // number Method를 바로 사용할 수 있다.
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
}
logMessage("hi");
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}
function askSomeone(someone: Developer | Person) {
    // skill, age는 자동완성되지 않는다.
    someone.name;
}

export {}
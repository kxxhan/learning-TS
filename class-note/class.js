function Person(name, age) {
    this.name = name;
    this.age = age;
}
var person = new Person("capt", 100);

// Class는 위 코드와 실질적으로 동일한 기능을 한다.
// Syntatic sugar라고 할 수 있다.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`${this.name}, 나이 :${this.age}, 생성완료!`)
    }
}

const jhin = new Person('진', 30);

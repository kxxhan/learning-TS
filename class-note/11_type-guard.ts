interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Jhin", skill: "TypeScript", age: 31 };
}

var person1 = introduce();
// Property "skill" does not exist on type Person...
// console.log( person1.skill )

// Type Assertion을 사용한 방법
if ((person1 as Developer).skill) {
  var skill = (person1 as Developer).skill;
  console.log(skill);
} else if ((person1 as Person).age) {
  var age = (person1 as Person).age;
  console.log(age);
}

// Type Assertion을 사용하면 가독성이 떨어지게 된다...
// 이 때 사용할 수 있는게 Type Guard

// Type Guard 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(person1)) {
  console.log(person1.skill);
} else {
  console.log(person1.age);
}

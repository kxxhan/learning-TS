enum Shoes {
    Nike,
    Adidas,
    Sth,
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

// Enum 활용 사례
// function askQuestion(answer: string) {
//     if (answer === "yes") {
//         console.log("correct");
//     }
//     if (answer === "no") {
//         console.log("incorrecrt");
//     }
// }
// askQuestion("yes")
// askQuestion("y")
// askQuestion("예스")

enum Answer {
    Yes = "Y",
    No = "N",
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log("correct");
    }
    if (answer === Answer.No) {
        console.log("incorrecrt");
    }
}
askQuestion(Answer.Yes)
askQuestion(Answer.No)
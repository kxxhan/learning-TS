function add(a: number, b: number): number {
    return a + b;
}

let res = add(10, 20);
// add(10, "20"); // Error occur

res.toLocaleString() // Number에서 제공하는 method, property들을 바로 제공받을 수 있다.
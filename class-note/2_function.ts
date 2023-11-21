// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}

// Optional paramter
// JS의 경우는 parameter를 추가적으로 넣어도 에러를 일으키지 않는다.
function log(a: string, b?: string): string {
    return a + b;
}
log('hello wrold');
log('hello ts', 'jhin');

export {}
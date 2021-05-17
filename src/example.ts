// 1. Напиши тип функции, конкатенирующей две строки
function concat(first:string, second:string){
	return first + second;
};

console.log(concat('Hello ', 'World'));

// 2. Напиши интерфейс для описания следующих данных
interface MuMyHometaskInterfase {
	[n:string]: any;
}

const MyHometask: MuMyHometaskInterfase = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

console.log(MyHometask.howIDoIt);
console.log(MyHometask.simeArray);
console.log(MyHometask.simeArray[0]);
console.log(MyHometask.simeArray[1]);
console.log(MyHometask.simeArray[2]);
console.log(MyHometask.withData);
console.log(MyHometask.withData[0].howIDoIt);
console.log(MyHometask.withData[0].simeArray);
console.log(MyHometask.withData[0].simeArray[0]);
console.log(MyHometask.withData[0].simeArray[1]);

// 3. В уроке про Generics мы написали интерфейс массива MyArray...
// Добавь типизацию для метода reduce

interface MyArray<T> {
	[n: number ]: T;
	reduce<U>(fn: (el: T) => U): U;
}

const tsArr: MyArray<number> = [1,2,3,4];
tsArr.reduce((i) => i + 1);
// Напиши тип функции, конкатенирующей две строки
function concat(str1: string, str2: string): string {
  return `${str1}${str2}`;
}
concat('Hello ', 'World'); // -> Hello World;

// Напиши интерфейс для описания следующих данных

interface TaskData {
  howIDoIt: string;
  simeArray: Array<string | number>;
}

interface TaskInterface extends TaskData {
  withData: Array<TaskData>;
}

const myHometask: TaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// Добавь типизацию для метода reduce

const tsArr: MyArray<number> = [1, 2, 3, 4];

interface MyArray<T> {
  [n: number]: T;
  reduce<U>(fn: (accumulator: U, currentValue: T, index?: number, array?: MyArray<T>) => U, initialValue?: U): U;
}

tsArr.reduce((accumulator: number, currentValue: number) => accumulator + currentValue);

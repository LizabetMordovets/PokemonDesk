import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('При вызове  функции со строковым параметром возвращает первую заглавную букву и другие маленькие', () => {
  test('Когда все буквы маленькие, вернет первую заглавную, а остальные маленькие', () => {
    const str = toCapitalizeFirstLetter('test');

    expect(str).toEqual('Test');
  });

  test('Когда первая буква заглавная, вернет первую заглавную и другие маленькие', () => {
    const str = toCapitalizeFirstLetter('Test');

    expect(str).toEqual('Test');
  });

  test('Когда все буквы заглавные, вернет первую заглавную и другие маленькие', () => {
    const str = toCapitalizeFirstLetter('Test');

    expect(str).toEqual('Test');
  });

 

 
});

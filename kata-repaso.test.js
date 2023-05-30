const { 
	sumAndReturn,
	multipleFive,
	isNum,
	twoArraysLen,
	calculate,
	cutAndReturn,
	elementinArray,
	calculeLen,
	isNegOrPos,
	isInside,
	removeDuplicates,
	reverseString
 } = require('./kata-lvl2');

test('Debe retornar true si es mayor a 10 y false si es menor', () => {
	expect(sumAndReturn(1, 2)).toBe(false);
	expect(sumAndReturn(10, 15)).toBe(true);
})

test('Debe retornar true si es multiple de 5 y false si no lo es', () => {
	expect(multipleFive(15)).toBe(true);
	expect(multipleFive(13)).toBe(false);
})

test('Debe retornar true si el parametro es numero y false si no lo es', () => {
	expect(isNum(3)).toBe(true);
	expect(isNum("hola")).toBe(false);
});

test('Debe devolver la longitud combinada de las dos cadenas', () => {
	expect(twoArraysLen("Hola", "Mundo")).toBe(9);
	expect(twoArraysLen("Hello", "World")).toBe(10);
	expect(twoArraysLen("", "Hola")).toBe(4);
	expect(twoArraysLen("Hola", "")).toBe(4);
	expect(twoArraysLen("", "")).toBe(0);
  });
  

  test('Debe devolver la resta del número mayor y el número menor', () => {
	expect(calculate(10, 5)).toBe(5);
	expect(calculate(7, 7)).toBe(0);
	expect(calculate(-3, 8)).toBe(11);
	expect(calculate(0, -10)).toBe(10);
  });

  test('Debe devolver la primera palabra de la cadena', () => {
	expect(cutAndReturn("Hola coders")).toBe("Hola");
	expect(cutAndReturn("Hello World")).toBe("Hello");
	expect(cutAndReturn("Programo increiblemente bien")).toBe("Programo");
  });
  

  test('Debe devolver true si el elemento está presente en el array y false si no lo está', () => {
	expect(elementinArray([1, 2, 3, 4, 5], 3)).toBe(true);
	expect(elementinArray(['a', 'b', 'c'], 'd')).toBe(false);
	expect(elementinArray([true, false, true], false)).toBe(true);
	expect(elementinArray([], 1)).toBe(false);
  });
  
  test('Debe devolver el tamaño del array SIN usar .length', () => {
	expect(calculeLen([1, 2, 3, 4, 5])).toBe(5);
	expect(calculeLen(['a', 'b', 'c'])).toBe(3);
	expect(calculeLen([])).toBe(0);
  });

  test('Debe devolver true si el número es positivo y false si es negativo', () => {
	expect(isNegOrPos(10)).toBe(true);
	expect(isNegOrPos(-5)).toBe(false);
	expect(isNegOrPos(0)).toBe(true);
  });

  test('Debe devolver la cadena modificada si el nombre no está dentro de ella', () => {
	expect(isInside("Carlos")).toBe("Laura, Pepa, Manuel, Carlos");
	expect(isInside("Pepa")).toBe(false);
  });
  
  test('Debe devolver un nuevo array sin elementos duplicados', () => {
	expect(removeDuplicates([1, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(removeDuplicates(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]);
	expect(removeDuplicates([])).toEqual([]);
  });
  
  test('Debe devolver la cadena invertida', () => {
	expect(reverseString("Hola")).toBe("aloH");
	expect(reverseString("JavaScript")).toBe("tpircSavaJ");
	expect(reverseString("")).toBe("");
  });
  


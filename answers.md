# typeof Investigation

| №   | Вираз                      | Моя гіпотеза | Реальний результат | Пояснення                             |
| --- | -------------------------- | ------------ | ------------------ | ------------------------------------- |
| 1   | typeof 42                  | number       | number             | Звичайне число                        |
| 2   | typeof 42n                 | bigint       | bigint             | Тип BigInt                            |
| 3   | typeof 'hello'             | string       | string             | Рядок                                 |
| 4   | typeof true                | boolean      | boolean            | Булевий тип                           |
| 5   | typeof undefined           | undefined    | undefined          | Неініціалізована змінна               |
| 6   | typeof null                | null         | object             | Історична помилка JavaScript          |
| 7   | typeof NaN                 | number       | number             | NaN все одно належить типу Number     |
| 8   | typeof Infinity            | number       | number             | Infinity також Number                 |
| 9   | typeof Symbol('id')        | symbol       | symbol             | Тип Symbol                            |
| 10  | typeof {}                  | object       | object             | Звичайний об'єкт                      |
| 11  | typeof []                  | array        | object             | Масив є спеціальним видом об'єкта     |
| 12  | typeof [1,2,3]             | array        | object             | Масив є об'єктом                      |
| 13  | typeof function(){}        | function     | function           | Функція має окремий тип               |
| 14  | typeof (()=>{})            | function     | function           | Arrow function також function         |
| 15  | typeof (2+2)               | number       | number             | Результат додавання число             |
| 16  | typeof ('2'+2)             | string       | string             | Конкатенація рядків                   |
| 17  | typeof ('foo'-'bar')       | number       | number             | Отримуємо NaN, а він Number           |
| 18  | let x; typeof x            | undefined    | undefined          | Змінна оголошена, але не має значення |
| 19  | typeof nonExistentVariable | error        | undefined          | typeof не кидає помилку               |
| 20  | typeof typeof 42           | string       | string             | typeof завжди повертає рядок          |

---

# Підозрілі справи

## typeof null

Виглядає як баг, тому що null — не об'єкт.

Правильно перевіряти:

```js
value === null;
```

---

## typeof []

Масив повертає object.

Правильно перевіряти:

```js
Array.isArray(value);
```

---

## typeof NaN

NaN повертає number.

Правильно перевіряти:

```js
Number.isNaN(value);
```

---

## typeof nonExistentVariable

Не викликає ReferenceError.

typeof спеціально повертає undefined, якщо змінна не існує.

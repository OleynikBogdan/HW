# Undefined vs Null

| №   | Сцена               | Що вивелося | Хто винен  | Як уникнути                            |
| --- | ------------------- | ----------- | ---------- | -------------------------------------- |
| 1   | let name;           | undefined   | JavaScript | Одразу присвоїти значення              |
| 2   | let name = null     | null        | Розробник  | Присвоїти реальне значення             |
| 3   | greet()             | undefined   | JavaScript | Передати аргумент                      |
| 4   | return a+b          | 5           | Ніхто      | Код правильний                         |
| 5   | немає return        | undefined   | Розробник  | Повернути result                       |
| 6   | return;             | undefined   | Розробник  | Повернути значення                     |
| 7   | user.age            | undefined   | JavaScript | Додати властивість age                 |
| 8   | middleName = null   | null        | Розробник  | Задати значення                        |
| 9   | arr[10]             | undefined   | JavaScript | Перевіряти довжину масиву              |
| 10  | user.address.street | undefined   | JavaScript | Створити street або використовувати ?. |

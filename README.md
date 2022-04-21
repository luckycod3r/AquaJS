![logo](https://i.imgur.com/fldyMvG.png"Орк")
___________
Библиотека для JavaScript

Функционал
-----------
:white_check_mark: Работа с DOM    
:black_square_button: Анимации    
:black_square_button: Асинхронные запросы      
:white_check_mark: Рандомные числа от `min` до `max`      
:white_check_mark: Сортировка массивов    
:black_square_button: Система Drag & Drop    
:white_check_mark: Работа с классами    
:black_square_button: Модальные окна    
:black_square_button: Диалоговые окна    

Пример
-----------

**Получение элемента**
```js
 // Любой селектор CSS
 A_(".class") => Объект || A_(".class").e => Элемент
 A_("#id") => Объект || A_("#id").e => Элемент    
 A_("tag") => Объект || A_("tag").e => Элемент    
 A_(".class > div") => Объект || A_(".class > div").e => Элемент
```
    
**Рандомные числа от `min` до `max`**
```js
 A_("random",min,max) // Вернёт случайное число в диапозоне min - max
```

**Сортировка массивов**
```js
 let array = [0,4,1,2,3,5,7,6,8,9];
 A_("sort",array,"ASC") // Вернёт [0,1,2,3,4,5,6,7,8,9]
```

**Работа с классами**    
Добавление класса    
```js
 let element = A_(".wrapper");
 A_("class",element,"add","class1,class2,class3"); // После выполнения элемент будет таким <div class="wrapper class1 class2 class3"> </div>
 Так-же можно
 A_("class",".wrapper","add","class1,class2,class3"); // После выполнения элемент будет таким <div class="wrapper class1 class2 class3"> </div>
```
Удаление класса
```js
 let element = A_(".wrapper");
 A_("class",element,"remove","class1,class2,class3"); // Удаляет все классы переданные через запятую
 Так-же можно
 A_("class",".wrapper","remove","class1,class2,class3");
```
Наличие класса
```js
 let element = A_(".wrapper");
 A_("class",element,"contains","class1,class2,class3"); // Вернёт [false,false,false] т.к этих классов у элемента нет.
 A_("class",".wrapper","contains","class1"); // Вернёт false т.к этого класса у элемента нет.
 В противном случае возвращает true или [true,true,...];
```

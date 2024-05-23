"use strict";
//Погрібняк Андрій Андрійович ТЗ-21
//Программа №1 (Перевірка числа на парність)


function Check(num){
    if(typeof(num) !=='number'){
        return '';
    }
    else if(typeof(num) === 'number'){
        if(num%2==0){
            return "Число "+num+" - парне";
        }
        else{
            return "Число "+num+" - непарне";
        }
    }
}
console.log(Check(1));
console.log(Check(2));
console.log(Check('TZ-21'));
"use strict";
//Погрібняк Андрій Андрійович ТЗ-21
//Программа №2 (Перебір масиву з можливістю вказати початок і цінець підрахунку)


function sort(a,b){
    let arrey=[];
    let sum=0;
    let start=a;
    let text="Sum of Arrey =";
    
    while (arrey.length < b) {
        if (Check(start)) {
            arrey.push(start);
            sum += start;
            text+=" "+start;
        }
        if(arrey.length <(b) && Check(start)){
            text+=" +";
        }
        start++;
    }
    text+=" = "+sum;

    function Check(n){
        if(n/n===1 && n/1===n && n%2 !==0 && n%3 !==0 && n%5 !==0 && n%7 !==0){
            return true;
        }
        if(n===2 || n===3 || n===5 || n===7){
            return true;
        }

    }
    return text;
}
console.log(sort(1,5));//Передаємо стартове число та кількість чисел, які необхідно знайти

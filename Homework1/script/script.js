










console.log('hi');

// функция isAbsoluteBalance принимает на вход строку
// и возвращает true, если в строке поровну символов a и не-а
// И символы "а" идут через один
// пример: isAbsoluteBalance("мама") -> true
// isAbsoluteBalance("папа") -> true
// isAbsoluteBalance("аааббб") -> false

function isAbsoluteBalance(str){
    let count = 0;
    const begin = (str[0] === 'а') ? 0:1;

     for (let i = begin; i < str.length; i+=2){
         if (str[i] === "а"){
             count++;
         }
         else {
             return false;
        }
     }
    if (str.length % count === 0){
        return true;
    }
    return false;
}

console.log(isAbsoluteBalance("мама"));
console.log(isAbsoluteBalance("папа"));
console.log(isAbsoluteBalance("аааббб"));
console.log(isAbsoluteBalance("маман"));
console.log(isAbsoluteBalance("маманн"));
console.log(isAbsoluteBalance("апап"));


// функция getDiagonal принимает стороны параллелипипеда a, b, c
// и возвращает диагональ этого параллелипипеда

function getDiagonal(a,b,c){
    const diag = Math.pow((a * a + b * b + c * c), 0.5);
    return diag;
}

console.log(getDiagonal(3,4,6));


// функция maskWords принимает строку str и число num
// и заменяет num слов на соответствующее количество *
// начиная с конца. Пример console.log(maskWords("Мама мыла раму", 2))
// выведет Мама **** ****


function maskWords(str, num) {
    let result = "";
    let foundSpaces = 0; //number of words
    for (let i = 0; i < str.length; i++) {
          if (str[i] === " "){
           foundSpaces ++;
          }
        }
        let wordCount = 0;
    for (let i = 0; i < str.length; i++) {
          let letter;
          if(str[i] === " "){
            letter = " ";
            wordCount++;
          }
          else if (wordCount < foundSpaces + 1 - num ){
            letter = str[i];
          }
          else{
            letter = "*";
          }
          result = result + letter;
}
return result;
}

console.log(maskWords("Мама мыла раму", 2));
console.log(maskWords("Мама мыла раму dsdds dsd sds sdsdsd", 5));


//функция countCats принимает на вход массив строк и возвращает
// количество строк, у которых есть подстрока "cat"
//пример countCats(["cat", "mama-cat", "papa-cat", "dog"]) -> 3

function countCats(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let word = str[i];
        for (let j = 0; j < word.length - 2; j++) {
            if (word[j] === 'c' && word[j + 1] === 'a' && word[j + 2] === 't'){
             count ++;
             break; // we need not all cats but all strings with cats if you find cat break!
       }  
        
        }
       
    }
    return count;
}

console.log(countCats(["cat", "mama-cat", "papa-cat", "dog"]) );
console.log(countCats(["cat", "mama-cat","dog", "catcatcat", "papa-cat", ]) );



// ПРОДВИНУТЫЙ УРОВЕНЬ
// функция flattenArray принимает на вход вложенную структуру
// вида, например, [ 1, 2, [7, 14, -8], [], [ [ [ [ 44 ] ] ] ] ]
// и возвращает её "плоскую" копию
// (в примере: [ 1, 2, 7, 14, -8, 44 ])
// Подсказка: понадобится typeof. В массиве могут быть или другие
// массивы или числа

// function flattenArray(arrays){
//     let result =[];
//     let index = 0;
//     function countEl(arr){

//     }
//     for (let i = 0; i < arrays.length; i++) {
//         if (typeof arrays[i] === 'object'){
//             let addarr = arrays[i];
//             for (let j = 0; j < addarr.length; j++) {
//                result[index++] = addarr[j];
//             }
//         }
//         else{
//        result[index++] = arrays[i];
//         }

//     }
//     return result;
// }



// function 



function flattenArray(arrays){
    let result =[];
    let index = 0;

    countEl(arrays, result, index)
        
    
    return result;
}


function countEl(arrays,result,index)
{
    for (let i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] === 'object'){
        let arrnew = arrays[i];
        index = countEl(arrnew,result,index);
    }
    else{
    result[index++] = arrays[i];
     }
   }
   return index;
}

console.log(flattenArray([1,2,[2,3,[6,5,65,45,45,],56,3,4],6]));

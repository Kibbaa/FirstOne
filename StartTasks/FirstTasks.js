//Task №1
const arrTask1 = [1, 2, 2, 3, 5, 6, 5, -1, -4,];
let PowArray = arrTask1.map(function(item){
    return item * item
});
console.log(PowArray);

//Task №2
const arrTask2 = [1, 2, 2, 3, 5, 6, 5, -1, -4, 0, 0, -4, -3];
let UniqueValue = Array.from(new Set(arrTask2));
console.log(UniqueValue);

//Task №2 second solution
const arrTaskSecond = [1, 2, 2, 3, 5, 6, 5, -1, -4, 0, 0, -4, -3];
function UniqueValues(arr){
    let result = [];
    for(let numm of arr){
    if (!result.includes(numm)){
        result.push(numm);
    }
  }
return result;
}
console.log(UniqueValues(arrTaskSecond));

//Task №3
const arrTask3 = [12, 13, -1 ,-2 , 2, 4];
const arrTask3Second = [1, 2, 4, 5, 5, 5, 5, 5];
const check = arrTask3.every((item) => item >= 0);
const check1 = arrTask3Second.every(item => item >= 0);
console.log(check);
console.log(check1);

//Task №4
const arrTask4 = [1, 2, 3, 4, 5, 21, 12]
const result = arrTask4.reduce((acc,item) => {
return acc + item;
},0);
console.log(result);
//Task №5 Подмассив
const arrTask5 = [1, 2, [3, 4] ,5, {a:7}];
const res5Task = arrTask5.filter((item) => {
  if (typeof item == 'object') {
    return true
  }
} );
console.log(res5Task);
//Tast №6 
const StringTask6 = " Верните количество слов в строке, длина которых больше четырёх символов"
let arrTask6 = StringTask6.split(' ');
const LeghtItem = arrTask6.filter(item => item.length > 4);
console.log(LeghtItem.length);
//Task №7
const StringTask7 = 'abcd123456ef5234'
const StringTask7False = 'abc12345asd'
const findNumber = (string) => {
let num = string.match(/\d{6}/);
console.log(num[0]);
};
console.log(findNumber(StringTask7));
//Task 8(Оставьте в массиве только отрицательные числа) случайно пропустил одно задание (4)
const arrTask8 = [1, 14, -4, -124, -2, 1, 4, 5]
const resTask8 = arrTask8.filter(item => item < 0 );
console.log(resTask8);
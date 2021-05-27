
// 1 завдання
let x = 1; 
let y = 2;
let res1 = "" + x + y;
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + "" + y;
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x);
console.log(res3);
console.log(typeof res3);

let res4 = parseFloat(Boolean(x));
console.log(res4);
console.log(typeof res4);


// 2 завдання

let res = prompt ("Введіть число");
if (res%2== 0 && res > 0) {
console.log("Число парне додатнє")
 } else if (res % 7 ==0){
     console.log("Число кратне 7")
 }else{
     console.log("Неправильне число")
 }



// завдання 3
let arr =[];
 arr.push = (122,'js',true,null);
    alert(arr.length);
      arr[4] = prompt('Введіть будь-яке знвчення');
     alert(arr[4]);
     arr.shift([1]);
     alert(arr);
     


// завдання 4

let cities = ["Rome", "Lviv", "Warsaw"]; 
cities = cities.join ("*");
alert(cities);


// завдання 5

let isAdult = prompt ("Скільки вам років");
if (isAdult>=18) {
alert ("Ви досягли повноліття"); }

else {
   ( isAdult<=10)
 alert ("Ви ще надто молодий")
}





// завдання 6
let a = prompt("Введіть бічну сторону трикутника")
let b = prompt("Введіть другу бічну сторону трикутника")
let c = prompt("Введіть основу трикутника")

let p = (a/2+b/2+c/2);
let S = (Math.sqrt(p*(p-a)*(p-b)*(p-c)));


console.log (S.toFixed(3));



if (a*a + b*b == c*c ){
alert ("Цей трикутник є прямокутним")

}else{

alert ("Цей трикутник не є прямокутним")
};





// завдання 7
let date = new Date ();
let currentHour = date.getHours();
if (currentHour >=23 || currentHour <= 5){
    alert ("Доброї ночі");
}else if (currentHour > 5  && currentHour <= 11){
    alert ("Доброго ранку");
   } else if (currentHour > 11 && currentHour <= 17){
        alert ("Доброго дня")
   }else if (currentHour > 17  &&  currentHour < 23){
    alert ("Доброго вечора");
   }
    


     
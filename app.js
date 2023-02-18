// function merhaba(){
//     console.log("merhaba")
// }

// merhaba();


// const selam = function() {
//     console.log("merhaba")
// }

// selam();

//ES6 ARROW FUNCTIONS

const merhaba = () =>  console.log("merhaba")  // Eğer tek bir işlem yapılıyorsa block açmaya gerek yok, aynı satırda yazılabilir.
const merhabaAd = Name => console.log("Merhaba", Name) // Eğer tek bir parametre alıyorsa paranteze de gerek yok
const merhabaAdSoyad = (firstName,lastName) => console.log("Merhaba", firstName, lastName); // Birden fazla parametre alıyorsa parantez açılmalı 
const cube = x => x*x*x  // Değer dönen fonksiyonlarda da tek bir işlem yapılıyorsa yine aynı şekilde block açmaya gerek yok

merhabaAd("Alper")
merhabaAdSoyad("Alper", "Akkan")
console.log(cube(4))

//DESTRUCTING (ARRAYLARİN VEYA OBJELERİN İÇİNDEN DEĞER ÇEKME) ESKİ YÖNTEM

let number1,number2 

let arr = [1,2,3,4,5]
number1 = arr[0]
number2 = arr[1]

console.log(number1,number2)

//DESTRUCTING ES6

let arr2 = [3,4,5,6]

let [number3,number4] = arr2 

console.log(number3,number4)

//DESTRUCTING OBJECTS ES6 ÖNCESİ

let obj = {
    a : 10,
    b : 20 ,
    c : 30 ,
    d : 40
}

let desNum1 = obj.a 
let desNum2 =obj.c
console.log(desNum1, desNum2)  // Burası normal obje değerlerini alma kısmı 


//DESTRUCTING OBJECTS WITH ES6

let obj2 = {
    e : 50,
    f : 60 ,
    g : 70,
    h : 80
}

let {desObj2} = {e:desNum3,f:desNum4} = obj2

console.log(desNum3,desNum4)

//ANOTHER EXAMPLE 

let employee = {
    empName : "Alper",
    empLastName :"Akkan",
    empAge : 28,
    empAct : () => console.log("is on work..")

}

let {desObj3} = {empName:empAlperName,empLastName:empAlperLastName,empAct:empAction} = employee

console.log(empAlperName,empAlperLastName)
empAction();


//SPREAD OPERATORÜ 

let numbers = [1,2,3,4,5,6]

console.log(numbers)
console.log(...numbers)   // Spread

let numbers2 = [12,13,...numbers] // Destructing


console.log(numbers2)
console.log(...numbers2)


let arrayDeneme = [1,2,3,4,5,6,7,8]

console.log(arrayDeneme)

console.log(JSON.stringify(arrayDeneme))

arrayDeneme.forEach(element => {
    console.log(element)
});

let listDiv = document.createElement("div")
document.body.appendChild(listDiv)
let listElements = document.createElement("ul")
listElements.style.listStyleType = "none"

listDiv.appendChild(listElements)

let elements = ["element1", "element2", "element3", "element4"]

// Alternatif 2 

let elements2 = {
    element1 : "element1",
    element2 : "element2",
    element3 : "element3",
    element4 : "element4"
}



console.log(elements2)

console.log(JSON.stringify(elements2))




elements.forEach(e  =>
listElements.innerHTML += `
<li>${e}</li>
`
)


listElements.innerHTML +=`
<li>${elements2.element1}</li>
<li>${elements2.element2}</li>
<li>${elements2.element3}</li>
<li>${elements2.element4}</li>
`
listDiv.style.border = "solid 1px black" 
listDiv.style.backgroundColor = "yellow"
listDiv.style.display = "flex" 


listDiv.innerHTML+= `
<p>${elements2.element1}</p>
`




//document.getElementById("count-el").innerText = 5

// 1. Create two variables, myAge and humanDogRatio
// let myAge = 38
// let humanDogRatio = 7
// // 2. Multiply the two together and store the result in myDogAge
// let myDogAge = myAge * humanDogRatio
// 3. Log myDogAge to the console
//console.log(myDogAge)


// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function myLogger(){

//      console.log("42")
// }

// myLogger()

// function newLogger(){

//     let lap1 = 34
//     let lap2 = 33
//     let lap3 = 36   
//     let sum = lap1+lap2+lap3
//     console.log(sum)
// }

// newLogger()

// let lapsCompleted = 0
// function increment(){
    
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// increment()
// increment()
// increment()

 let countEl = document.getElementById("count-el")
 let saveEl =  document.getElementById("save-el")

 console.log(countEl)

 let count = 0

 function increment() {
     count += 1
     countEl.textContent = count
 }

 function save(){

    let countStr = count + " - "
    saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0
}

let username = "Musa"
let message = "you have three new notifications"


let messageToUsr = message + ", "+username + "!"
console.log(messageToUsr)

let names = "Wasif"
let greeting = "Welcome back "

let myGreeting = greeting + names
console.log(myGreeting)

let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerText = greeting + names

welcomeEl.innerText += "👋"
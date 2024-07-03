
//document.getElementById("count-el").innerText=3

// let count =5*7
// console.log(count)

//initialize counter as 0
//listen for clicks on the increment button
//increment the counter variable when the button is clicked
//change the count-el in the HTML to reflect the new count

// function Increment() {
//     console.log("the button was clicked")
// }
// Increment()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() {
//      let=totalTime= lap1+lap2+lap3
//     console.log(lap1+lap2+lap3)

    
// }
// logLapTime()

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted=lapsCompleted +1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)


//    let countEl = document.getElementById("count-el")   
   
//    console.log(countEl)

//    let count = 0
//    function Increment () {

//        count =count+1
//        countEl.innerText = count
       
//    }





// let count = 0;

// function increment() {
//     count = count + 1;
//     console.log(count); // Log the value of count
// }

// increment(); // Call the function to see the output

/* THE DOM(Document Object Model)*/


//    function calculateTax(param1, taxPercent= 0.1){
//     console.log(param1*taxPercent);
    
//    }
//    calculateTax(2000, 0.2)
//    calculateTax(5000)

document.querySelector('.js-subscribe-button').onclick = function() {
    const buttonElement = document.querySelector('.js-subscribe-button'); 
    if (buttonElement.innerHTML === 'subscribe') {
        buttonElement.innerHTML = 'subscribed';
    } else {
        buttonElement.innerHTML = 'subscribe';
    }
};

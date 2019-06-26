//My animations Js file.


// Let's define animations
//
// 1. starting point
// 2. Step
// 3. Time between steps
// 4. Total time 
// 5. Ending point


// you can use "setTimeout" as delay
//you can use "setInterval" as an interval
// const timeoutCallback = function () {
//     console.log("I timed out!");
// }

// const timeOut =setTimeout(timeoutCallback, 1000);
// clearTimeout(timeOut);

// const clockTick = function( ) {
//     console.log ("Tick, Tock");
// }

// const timer = setInterval(clockTick, 1000);
// clearInterval(timer);



// 2. Step
const fadeNickAway = function() {
    const nick = document.querySelector(".nick");

    const currentOpacityAsString= getComputedStyle(nick).opacity;
    const currentOpacity = parseFloat(currentOpacityAsString);

    let newOpacity = currentOpacity - 0.01;
    nick.style.opacity = newOpacity;

    // 3. Time between steps
    if (currentOpacity >= 0) {
        setTimeout(fadeNickAway, 10);
    }
}

setTimeout(fadeNickAway, 1000);
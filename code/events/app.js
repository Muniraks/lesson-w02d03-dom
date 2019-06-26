// Our JS file for the events project.

console.log('Hello from JS!');

// Events need:
// 1. An event type ("Click")
// 2. An event target ("Button")
// 3. A callback function 
// 
// When  all of those things are combined, 
// they become an event listener. 

// The type of the event 
const eventType = 'click';

// The target of the event
const myButton = document.querySelector("button");


// The callback function - what do you want to do 
// as a response?
const myCallback = function (event){
console.log('The button was clicked', event);
}
// Create an event listener
// When this EVENT takes place on this TARGET,
// call this CALLBACK FUNCTION.

myButton.addEventListener(eventType,myCallback);


// Type, Target, Callback , EventListener

// Dark Theme
const darkButton = document.querySelector('#dark');
const changeToDarkTheme= function()
{
    console.log('Dark Theme');
    document.body.style.background='black';
    document.body.style.color='white';
}
darkButton.addEventListener('click', changeToDarkTheme);

// Light Theme
const lightButton = document.querySelector('#light');
const changeToLightTheme= function()
{
    console.log('Light Theme');
    document.body.style.background='white';
    document.body.style.color='black';
}
lightButton.addEventListener('click', changeToLightTheme);

//
const postTweetButton = document.querySelector('.post');
const createTweet = function ()
{

// Get whatever is typed in the input 
// and save it in variable called content

const input = document.querySelector('input');
const content = input.value;
 
// create new paragraph  ( to post the tweet)

const newPara = document.createElement ('p');
newPara.innerText = content;

// take that paragraph and put it at the end 
// of the div. newTweets
const newTweetsDiv = document.querySelector('.newTweets');
newTweetsDiv.appendChild(newPara);
}

postTweetButton.addEventListener('click', createTweet);

// colors

const colorInput = document.querySelector('input.color');

const onColorChange = function ()
{
document.body.style.background = colorInput.value;
    // to do 
}

colorInput.addEventListener('change' , onColorChange);

// 

const clickCounterButton = document.querySelector('button.click');

let  clickCount = 0; 
const onClick = function ()
{
  clickCount +=1;
  const targetDiv = document.querySelector('.clickCount');
  targetDiv.innerText = clickCount;

}

clickCounterButton.addEventListener('click', onClick);


//
const billImage = document.querySelector('.bill');
const nickImage = document.querySelector('.nick');

const doubleImageSize = function()
{
this.style.width='600px';


}

billImage.addEventListener('click', doubleImageSize);
nickImage.addEventListener('click', doubleImageSize);

//

// // // // // Our new JS file.

// // // // // console.log('Hi');

// // // // // select the h1
// // // // console.log("hi")
// // // // const heading = document.querySelector('h1');
// // // // console.log(heading);

// // // // // select the paragraph

// // // // const paragraph= document.querySelector('p');
// // // // console.log(paragraph);

// // // // // select the img with a class selector

// // // // const image=document.querySelector('.bill');
// // // // console.log(image);

// // // // // 

// // // // const firstListItem = document.querySelector('li');
// // // // const secondListItem= document.querySelector('li#second');

// // // // console.log(firstListItem, secondListItem);

// // // // // document.querySelectorAll('CSS Selectors');

// // // // const allListItems= document.querySelectorAll('li');
// // // // // console.log(allListItems);

// // // // console.log('Starting  loop..');
// // // // for (let i=0; i <allListItems.length; i +=1)
// // // // {
// // // // const currentListItem = allListItems[i];
// // // // console.log(currentListItem);

// // // // }
// // // // console.log('Ending loop..');



// // // // const allParagraphs = document.querySelectorAll('p');
// // // // console.log(allParagraphs);

// // // // console.clear();

// // // // to move a line up and down use > alt and scroll it

// // // // elm.getAttribute("ATTRIBUTE_NAME");

// // // const img= document.querySelector('img');

// // // const src= img.getAttribute('src');
// // // console.log(src);

// // // const alt=img.getAttribute('alt');
// // // console.log(alt);

// // // // Find the 'a' tag, and log out the 'href' attribute

// // // const aTag= document.querySelector('a');

// // // const href = aTag.getAttribute('href');
// // // console.log(href);

// // // elm.setAttribute ("Attribute Name ", "Desired Value");

// // // const img = document.querySelector('img');

// // // const currentSrc = img.getAttribute('src');

// // // img.setAttribute('src', 'https://placecage.com/400/400');

// // // // Find the 'a' tag

// // // const aTag = document.querySelector('a');

// // // change the href to https://duckduckgo.com 

// // // aTag.setAttribute('href', 'https://duckduckgo.com ');

// // // print the new href

// // // const newHref= aTag.getAttribute('href');
// // // console.log(newHref);

// // // Try setting the target attribute to be '_blank'
// // // aTag.setAttribute('target', '_blank');


// // // // Find the h1 
// // // const heading= document.querySelector('h1');

// // // // print the current text of h1
// // // console.log(heading.innerText);

// // // Find the h1
// // const heading = document.querySelector("h1");

// // //Print the current text of h1
// // console.log(heading.innerText);

// // heading.innerText="Changed By JS";


// // heading.innerText+='!!!!';

// // aTag.innerText='This is a <h2>link</h2>';
// // const input = document.querySelector('input');



// // GETTING STYLES
// // 1. Select the DOM Node

// const heading = document.querySelector('h1');

// // 2. Ask for all of the current styles

// const styles = getComputedStyle(heading);

// // 3. ask for properties

// console.log(styles.color);
// console.log(styles.fontSize);
// console.log(styles.textDecoration);
// console.log(styles.border);

// // Find the "a" tag

// const aTag = document.querySelector('a');

// // Get all off the current styles for the 'a' tag

// const aTagStyles = getComputedStyle(aTag);

// // print out the text color,
// // Display, font size and the 
// // text decoration of the 'a' tag

// console.log(aTagStyles.color);
// console.log(aTagStyles.display);
// console.log(aTagStyles.fontSize);
// console.log(aTagStyles.textDecoration);

// // Find the image
// console.log('Find image..');

// const image = document.querySelector('img');

// Print out the border, width , height
// and the border-radius properties
// const imageStyles=getComputedStyle(image);
// console.log(imageStyles.border);
// console.log(imageStyles.width);
// console.log(imageStyles.height);
// console.log(imageStyles.borderRadius);

// console.log('----------');
// console.log(imageStyles);
// console.log(imageStyles.length);

// Changes Styles

// const heading = document.querySelector('h1');
// heading.style.color='hotpink';
// heading.style.background='green';
// heading.style.fontSize='100px';

// const image = document.querySelector('img');
// image.style.width='200px';
// image.style.height='400px';
// image.style.border='50px solid pink';


// creating Elements
//1. create the element and store it in a JS variable
//2. Change it (using things like .innerText, .style)
//3. put it on the page.

const newHeading = document.createElement('h1');
newHeading.innerText='created By javascript!';

const targetDiv = document.querySelector('div.dynamic');

targetDiv.appendChild(newHeading);


const newImg = document.createElement('img');
newImg.setAttribute('src','https://fillmurray.com/400/400');

newImg.style.border = '4px dashed purple';

document.body.append(newImg);

const tweet = "This is a tweet";
const author = "Ahlam";

const content = `${tweet}, posted by ${author}`;

const newParagraph = document.createElement('p');

newParagraph.innerText= content;
newParagraph.style.color='blue';

const newTweetsDiv = document.querySelector('.newTweets');
newTweetsDiv.appendChild(newParagraph);





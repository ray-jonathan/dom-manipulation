// Grab the body element of the page
const body = document.body;

// Create a header element and append it to the body
const elHeader = document.createElement('header');
body.appendChild(elHeader)


// Style the header with a height, custom background color, 
elHeader.style.height = `100px`;
elHeader.style.backgroundColor = `orange`;
elHeader.style.display = `flex`;
// Create and add a h1 element to the header, add some text, and center it
const elH1 = document.createElement('h1');
elHeader.appendChild(elH1);
const txt = document.createTextNode(`Fortune`);
elH1.appendChild(txt) ;
elH1.style.textAlign = 'center';


// No, like center it in the header. Middle of the middle!
elHeader.style.justifyContent = 'center';
elHeader.style.alignItems = 'center';
// Customize the header title you made in some way, such as font family, style, or size. Color too! Get creative
elH1.style.fontFamily = 'Helvetica';
elH1.style.fontStyle = 'italic';
elH1.style.color = 'green';
elH1.style.fontSize = '45px';
// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Make another element, this time a div that'll house the rest of our content
const main = document.createElement('div');

// Append it to the body
body.appendChild(main);

// Create an image element
const img = document.createElement('img');

// Set the source attribute of the image element to `https://i.imgur.com/5bMVQtj.png` and append it to the content div
img.setAttribute('src', 'https://i.imgur.com/5bMVQtj.png');
main.appendChild(img);

// Center this image on the page using your favorite method. (I'm using flexbox, but you do you)
  // Note: don't forget to give your content div a height like I did 😳
main.style.height = '80vh';
main.style.display = `flex`;
main.style.justifyContent = 'center';
main.style.alignItems = 'center';

// Now's a good time to style the body background too, I guess
body.style.backgroundColor = 'lightBlue'

// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Create text in a paragraph element and get it to appear over the image element
  // Text: 'The man who runs may fight again.\n\t\t-- Menander'
  // Hint: This is going to require setting the content's position to relative first
  // Hint: Additionally, I styled the paragraph element's width, text alignment, top and left positions
  const p = document.createElement("p");
  main.appendChild(p);
  const txtP = document.createTextNode('The man who runs may fight again.\n\t\t-- Menander');
  p.appendChild(txtP);
  p.style.position='relative';
  p.style.left='-250px';
  p.style.top = '-10px';
  p.style.zIndex='2';
  p.style.width='230px';
  p.style.textAlign='center';
  
  
  // Make an Object (a.k.a a 'dictionary') called `fortune` and add one key-value pair:
    // 'fortune' : 'The man who runs may fight again.\n\t\t-- Menander'
  const fortuneObj = { fortune: 'The man who runs may FIGHT again.\n\t\t-- Menander'};
  
  // Cool, now just trust me for this next one...
    // Set the inner HMTL of the paragraph element to the value of the fortune key in the fortune object
    console.log(p.innerHTML = fortuneObj['fortune']);
    
  // // // // // // // // // // // //  // // // //
  // PAUSE: PLEASE WAIT FOR FURTHER INSTRUCTION //
  // // // // // // // // // // // //  // // // //

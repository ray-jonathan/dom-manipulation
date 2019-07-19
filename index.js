// Grab the body element of the page
  const body = document.body;

// Create a header element and append it to the body
const header = document.createElement(`div`);
header.classList.add(`headerTop`);
body.appendChild(header);
// Style the header with a height, custom background color, 
header.style.height = `14vh`;
header.style.backgroundColor = `purple`;
// No, like center it in the header. Middle of the middle!
header.style.display = `flex`;
header.style.alignItems = `center`;
header.style.justifyContent = `center`;
// Create and add a h1 element to the header, add some text, and center it
const title = document.createElement(`h1`);
title.innerHTML += `Fortunes`;
title.classList.add(`headerText`);
header.appendChild(title);
// Customize the header title you made in some way, such as font family, style, or size. Color too! Get creative
title.style.fontFamily = `sans-serif`;
title.style.fontSize = `60px`;
title.style.color = `white`;
// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Make another element, this time a div that'll house the rest of our content
const house = document.createElement(`div`);

// Append it to the body
body.appendChild(house);

// Create an image element
const image= document.createElement('img');

// Set the source attribute of the image element to `https://i.imgur.com/5bMVQtj.png` and append it to the content div
image.setAttribute('src',`https://i.imgur.com/5bMVQtj.png`);
image.style.width = "600px";
house.appendChild(image);
// Center this image on the page using your favorite method. (I'm using flexbox, but you do you)
house.style.display = `flex`;
house.style.alignItems = `center`;
house.style.justifyContent = `center`;

  // Note: don't forget to give your content div a height like I did 😳
house.style.height = `40vh`;

// Now's a good time to style the body background too, I guess
body.style.backgroundColor = `aquamarine`;

// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Create text in a paragraph element and get it to appear over the image element
  // Text: 'The man who runs may fight again.\n\t\t-- Menander'
  // Hint: This is going to require setting the content's position to relative first
  // Hint: Additionally, I styled the paragraph element's width, text alignment, top and left positions
const txt = document.createElement('p');
txt.style.position = "relative";
// console.log(fortune['fortune']);
house.appendChild(txt);
txt.style.right = "350px";
txt.style.bottom = "15px";
// Make an Object (a.k.a a 'dictionary') called `fortune` and add one key-value pair:
// 'fortune' : 'The man who runs may fight again.\n\t\t-- Menander'
const fortune = {'fortune' : 'The man who runs may fight again.\n\t\t <br\> -- Menander'}
// Cool, now just trust me for this next one...
// Set the inner HMTL of the paragraph element to the value of the fortune key in the fortune object
txt.innerHTML += fortune['fortune'];
// // // // // // // // // // // //  // // // //
// PAUSE: PLEASE WAIT FOR FURTHER INSTRUCTION //
// // // // // // // // // // // //  // // // //
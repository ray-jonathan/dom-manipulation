// Grab the body element of the page
  const body = document.body;

// Create a header element and append it to the body

const header = document.createElement("header");
document.body.appendChild(header);

// Style the header with a height, custom background color, 

header.style.backgroundColor = "green";
header.style.height = "200px";
header.style.width = "100%";

// Create and add a h1 element to the header, add some text, and center it

const h1 = document.createElement("h1");
const text = document.createTextNode("Fortune");
h1.appendChild(text);
header.appendChild(h1);
header.style.display = "flex";
header.style.justifyContent = "center";

// No, like center it in the header. Middle of the middle!

header.style.alignItems = "center";

// Customize the header title you made in some way, such as font family, style, or size. Color too! Get creative

h1.style.fontFamily = "Impact";

document.body.appendChild(header);

// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Make another element, this time a div that'll house the rest of our content

// Append it to the body

// Create an image element

// Set the source attribute of the image element to `https://i.imgur.com/5bMVQtj.png` and append it to the content div

// Center this image on the page using your favorite method. (I'm using flexbox, but you do you)
  // Note: don't forget to give your content div a height like I did 😳

// Now's a good time to style the body background too, I guess

// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Create text in a paragraph element and get it to appear over the image element
  // Text: 'The man who runs may fight again.\n\t\t-- Menander'
  // Hint: This is going to require setting the content's position to relative first
  // Hint: Additionally, I styled the paragraph element's width, text alignment, top and left positions

// Make an Object (a.k.a a 'dictionary') called `fortune` and add one key-value pair:
  // 'fortune' : 'The man who runs may fight again.\n\t\t-- Menander'

// Cool, now just trust me for this next one...
  // Set the inner HMTL of the paragraph element to the value of the fortune key in the fortune object
  
// // // // // // // // // // // //  // // // //
// PAUSE: PLEASE WAIT FOR FURTHER INSTRUCTION //
// // // // // // // // // // // //  // // // //
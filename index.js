// Grab the body element of the page
  const body = document.body;

// Create a header element and append it to the body
const header = document.createElement("header");
body.appendChild(header);
// Style the header with a height, custom background color, 
header.style.backgroundColor = "lightcoral";
header.style.height = "500px";
// Create and add a h1 element to the header, add some text, and center it
const h1 = document.createElement("h1");
header.appendChild(h1);
h1.innerHTML="<strong>GROUP TWO ROCKS!</strong>";
// h1.style.textAlign="center";
// No, like center it in the header. Middle of the middle!
header.style.display = "flex";
header.style.justifyContent ="center";
header.style.alignItems ="center";
// Customize the header title you made in some way, such as font family, style, or size. Color too! Get creative
h1.style.fontFamily ="comic-sans";
h1.style.color ="#c35abc"
// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Make another element, this time a div that'll house the rest of our content
const div = document.createElement("div");
// Append it to the body
body.appendChild(div);
// Create an image element
const img = document.createElement("img")
// Set the source attribute of the image element to `https://i.imgur.com/5bMVQtj.png` and append it to the content div
img.setAttribute('src', 'https://i.imgur.com/5bMVQtj.png')
div.appendChild(img);
// Center this image on the page using your favorite method. (I'm using flexbox, but you do you)
div.style.display = "flex";
div.style.justifyContent = "center"

// Note: don't forget to give your content div a height like I did 😳
div.style.height = "200px"
// Now's a good time to style the body background too, I guess
body.style.backgroundColor = "lightblue";
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
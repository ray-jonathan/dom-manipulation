// Grab the body element of the page
const body = document.body;

// Create a header element and append it to the body

  const header = document.createElement('header')
  body.appendChild(header)

// Style the header with a height, custom background color, 

  header.style.height = "200px";
  header.style.backgroundColor = "blue";

// Create and add a h1 element to the header, add some text, and center it
  const title = document.createElement('h1')
  header.appendChild(title)

  title.innerHTML = "hello beautiful";
  header.style.display = "flex";


// No, like center it in the header. Middle of the middle!

  header.style.justifyContent = "center"
  header.style.alignItems = "center";

// Customize the header title you made in some way, such as font family, style, or size. Color too! Get creative

  title.style.fontFamily = "serif";
  title.style.fontStyle = "italic"
  title.style.fontSize = "3rem";
  title.style.color = "orange";

// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Make another element, this time a div that'll house the rest of our content
const houseContent = document.createElement('div')
// Append it to the body
body.appendChild(houseContent);
// Create an image element
const img = document.createElement('img')
houseContent.appendChild(img);

// Set the source attribute of the image element to `https://i.imgur.com/5bMVQtj.png` and append it to the content div
img.src = `https://i.imgur.com/5bMVQtj.png`;
// Center this image on the page using your favorite method. (I'm using flexbox, but you do you)
  // Note: don't forget to give your content div a height like I did 😳
houseContent.style.display="flex";
houseContent.style.flexDirection='column'
houseContent.style.justifyContent= 'center';
houseContent.style.height='500px';
img.style.height="50%";
houseContent.style.alignItems="center";


// Now's a good time to style the body background too, I guess
houseContent.style.backgroundColor= 'lightblue';

// // // // // // // // // // // //  // // // // //
// SWITCH: PLEASE HAND OFF CONTROL TO A PARTNER  //
// // // // // // // // // // // //  // // // // // 

// Create text in a paragraph element and get it to appear over the image element
const fortuneText = document.createElement('p')
houseContent.appendChild(fortuneText)
// Text: 'The man who runs may fight again.\n\t\t-- Menander'
fortuneText.innerHTML = 'The man who runs may fight again.\n\t\t-- Menander'
  // Hint: This is going to require setting the content's position to relative first
fortuneText.style.position= 'relative'
  // Hint: Additionally, I styled the paragraph element's width, text alignment, top and left positions
  fortuneText.style.width = '450px'
  fortuneText.style.fontSize = '24px'
  fortuneText.style.textAlign = 'center'
  fortuneText.style.bottom = '190px'
  fortuneText.style.left = '75px'

// Make an Object (a.k.a a 'dictionary') called `fortune` and add one key-value pair:
  // 'fortune' : 'The man who runs may fight again.\n\t\t-- Menander'
const fortune = {
  'fortune' : 'The man who runs may fight again.\n\t\t-- Menander'
}
// Cool, now just trust me for this next one...
  // Set the inner HMTL of the paragraph element to the value of the fortune key in the fortune object
  fortuneText.innerHTML = fortune.fortune
// // // // // // // // // // // //  // // // //
// PAUSE: PLEASE WAIT FOR FURTHER INSTRUCTION //
// // // // // // // // // // // //  // // // //

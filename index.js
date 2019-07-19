// Grab the body element of the page
  const body = document.body;

// Create a header element and append it to the body
  const header = document.createElement('header');
  body.appendChild(header);


// Style the header with a height, custom background color, 
  header.style.height = '100px';
  header.style.backgroundColor = '#badbad';

// Create and add a h1 element to the header, add some text, and center it
  const heading = document.createElement('h1');
  header.appendChild(heading);
  header.innerText = 'FORTUNES';
  header.style.textAlign = 'center';

// No, like center it in the header. Middle of the middle!
  header.style.display = "flex";
  header.style.justifyContent = "center";
  header.style.alignItems = "center";

// Customize the header title you made in some way, such as font family, style, or size. Color too! Get creative
  header.style.fontFamily = 'Arial, Helvetica, sans-serif';
  header.style.fontStyle = 'italic';
  header.style.fontSize = '3rem';
  header.style.color = '#bedbed';
  header.style.textShadow = '2px 2px 4px #616161';
  // header.setAttribute('style', 'font-family:Arial,Helvetica,sans-serif; font-style:italic; font-size:3rem; color:#bedbed; text-shadow:2px 2px 4px #616161;');

// Make another element, this time a div that'll house the rest of our content
  const content = document.createElement('div');

// Append it to the body
  body.appendChild(content);

// Create an image element
  const imageElement = document.createElement('img');

// Set the source attribute of the image element to `https://i.imgur.com/5bMVQtj.png` and append it to the content div
  imageElement.setAttribute('src', 'https://i.imgur.com/5bMVQtj.png');
  content.appendChild(imageElement);

// Center this image on the page using your favorite method. (I'm using flexbox, but you do you)
  // Note: don't forget to give your content div a height like I did 😳
  content.setAttribute('style', 'display:flex; justify-content:center; align-items:center; height:80vh;');
    // content.style.display = 'flex';
    // content.style.justifyContent = 'center';
    // content.style.alignItems = 'center';
    // content.style.height = '80vh';

// Now's a good time to style the body background too, I guess
  body.style.backgroundColor = '#debdeb';

// Create text in a paragraph element and get it to appear over the image element
  // Text: 'The man who runs may fight again.\n\t\t-- Menander'
  // Hint: This is going to require setting the content's position to relative first
  // Hint: Additionally, I styled the paragraph element's width, text alignment, top and left positions
  content.style.position = 'relative';
  const text = document.createElement('p');
  text.innerHTML = 'The man who runs may fight again.\n\t\t-- Menander';
  text.setAttribute('style', 'position:absolute; width:200px; text-align:center; top:40%; left:45%;');
    // text.style.position = 'absolute';
    // text.style.width = '200px';
    // text.style.textAlign = 'center';
    // text.style.top = '40%';
    // text.style.left = '45%';
  content.appendChild(text);

// Make an Object (a.k.a a 'dictionary') called `fortune` and add one key-value pair:
  // 'fortune' : 'The man who runs may fight again.\n\t\t-- Menander'
  const fortune = {'fortune' : 'The man who runs may fight again.\n\t\t-- Menander'}
  
// Cool, now just trust me for this next one...
  // Set the inner HMTL of the paragraph element to the value of the fortune key in the fortune object
  text.innerHTML = fortune.fortune;
  
// // // // // // // // // // // //  // // // //
// PAUSE: PLEASE WAIT FOR FURTHER INSTRUCTION //
// // // // // // // // // // // //  // // // //
  
// Round Two- Code Along!

// Write a function to get data from a server
const fortuneData = async () => {
  const unreadyData = await fetch('http://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune/platitudes/');
  readyData = await unreadyData.json();
  return readyData;
}

// Apply that data to the paragraph element's inner HTML
fortuneData().then(result => text.innerHTML = result.fortune);

// Bonus Goal:
// Make a button to generate a new fortune
  const fortuneButton = document.createElement('button');
  fortuneButton.innerHTML = 'New Fortune';
  fortuneButton.addEventListener('click', () => {
    fortuneData().then(result => text.innerHTML = result.fortune);
  });
  content.style.flexDirection = 'column';
  content.appendChild(fortuneButton);

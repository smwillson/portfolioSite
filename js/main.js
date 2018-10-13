const ABOUT_ME_TEXT =`
<h2> About Me:</h2>
<p>
Sama is a word of Arabic origin meaning "sky".<p><p>
I am student of Udacity and a Software developer by profession.<p>
When I am not working or coding, I play with my cats named Purrbles,Boo and Nacho.<p><p>
In my spare time I also like to cook and bake. Home-made cookies are my speciality.<p><p>
I am  also an amateur aquarium-keeper and have a fish named Dragontail.<p><p>
I love to travel and explore new places as well
<p><p>
My favorite quote:

<p>Eager eye and willing ear,
Lovingly shall nestle near.
<p><p>
In a Wonderland they lie,
<p>Dreaming as the days go by,
<p>Dreaming as the summers die:
<p><p>
<p>Ever drifting down the stream —
<p>Lingering in the golden gleam —
<p>Life, what is it but a dream?
<p>-- Lewis Caroll`;

let profilePicturePath = `images/sm.jpg`;
let logoPath = `images/logo.png`;

let mainContentPciture;

let catImageArray = [
  `images/purrbles.jpg`,
  `images/boo.jpg`,
  `images/nacho.jpg`,
];
let hobbiesArray = [`images/aquarium.jpg`,
  `images/cookies.jpg`,
  `images/traveling.jpg`
];

let hobbiesTextArray = [
  `My aquarium where my Betta fish, Dragontail, lives`,
  `Home-made cookies,compliments to the chef`,
  `An aerial view of Denver city, Colorado.`
];
let hobbyCaptions = [`Aquarium Keeping`, `Baking`, `Traveling`];

catImageArray.forEach(cat => {

  const catName = cat.replace(/^.*[\\\/]/, '').replace(".jpg","").trim();
  const catImage = document.createElement('img');
  catImage.setAttribute('src', cat);
  catImage.setAttribute('alt', `Picture of my cat ${catName}`);
  catImage.classList.add("zoom");

  const catImageFigure = document.createElement('figure');
  catImageFigure.setAttribute('aria-role', "presentation");
  catImageFigure.append(catImage);

  const catImageCaption = document.createElement('figcaption');
  catImageCaption.innerHTML = catName;

  catImageFigure.append(catImageCaption);

  let divider = document.getElementsByClassName("cat-class-div")[0];

  divider.append(catImageFigure);

});

//popluate the header now
const logo = document.createElement('img');
logo.setAttribute('src', logoPath);
logo.setAttribute('alt', "Logo of the webpage");
logo.classList.add("logo-image-class");

const pageHeading = document.createElement('h1');
pageHeading.innerHTML = `Sama Mushtaq`;

const pageSubHeading = document.createElement('h3');
pageSubHeading.innerHTML = `Software developer, cat-mom, aquarium-keeper`;

const pageHeader = document.getElementsByClassName("header-div")[0];
pageHeader.setAttribute('aria-role', 'header');
pageHeader.append(logo);
pageHeader.append(pageHeading);
pageHeader.append(pageSubHeading);

//create main article
const aboutMe = document.createElement('article');
aboutMe.setAttribute('aria-role',"contentinfo");
aboutMe.setAttribute('aria-label',"A short bio");

aboutMe.innerHTML =ABOUT_ME_TEXT;
const mainContent = document.getElementsByClassName("main-class-div")[0];
mainContent.setAttribute('aria-role',"main");
mainContent.append(aboutMe);

const aboutMeImg = document.createElement('img');
aboutMeImg.setAttribute('src', profilePicturePath);
aboutMeImg.setAttribute('alt', 'A picture of me holding my cat Nacho.');
aboutMeImg.classList.add('profile-pic');
mainContent.append(aboutMeImg);


//set up hobbies section
const hobbiesText = document.createElement('p');
const hobbyContent = document.getElementsByClassName("hobbies-class-div")[0];
hobbiesText.innerHTML = `Hobbies`;
hobbyContent.append(hobbiesText);

let index = 0;
hobbiesArray.forEach(hobby => {
  const hobbyImage = document.createElement('img');
  hobbyImage.setAttribute('src', hobby);
  hobbyImage.setAttribute('alt', hobbiesTextArray[index]);
  hobbyImage.classList.add('zoom');

  const hobbyTitle = document.createElement('figure');
  hobbyTitle.setAttribute('aria-role', "presentation");
  const caption = document.createElement('figcaption');
  caption.innerHTML = hobbyCaptions[index++];
  hobbyTitle.append(hobbyImage);
  hobbyTitle.append(caption);

  hobbyContent.append(hobbyTitle);
});


//add content to footer

const footer = document.getElementById("footer");
footer.innerHTML =`Let's connect and keep in <a href="https://www.linkedin.com/in/sama-mushtaq-baa265127/"> touch`;

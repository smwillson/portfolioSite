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
let hobbyCaptions= [`Aquarium Keeping`, `Baking` ,`Traveling`];

catImageArray.forEach(cat => {

  const catImage = document.createElement('img');
  catImage.setAttribute('src', cat);
  catImage.setAttribute('alt', `Picture of my cat ${cat.replace(/^.*[\\\/]/, '')}`);
  catImage.classList.add("cat-image-class");

  const catImageDiv = document.createElement('div');
  catImageDiv.classList.add("catImage-div-class");
  catImageDiv.append(catImage);

  const textContainer = document.createElement('div');
  textContainer.classList.add("text-container-class");
  textContainer.innerHTML = cat.replace(/^.*[\\\/]/, '');
  catImageDiv.append(textContainer);

  let divider = document.getElementsByClassName("cat-class-div")[0];

  divider.append(catImageDiv);

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
aboutMe.innerHTML = `
Sama is a word of Arabic origin meaning "sky".<p>
I live in the state of Missouri. I have 3 cats named Purrbles,Boo and Nacho. I am an amateur aquarium-keeper.
I also have a fish named Dragontail.<p>
I am student of Udacity and a Software developer by profession. `;
const mainContent = document.getElementsByClassName("main-class-div")[0];
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

const hobbyTitle = document.createElement('figure');
hobbyTitle.setAttribute('aria-role',"presentation");
const caption = document.createElement('figcaption');
caption.innerHTML = hobbyCaptions[index++];
hobbyTitle.append(hobbyImage);
hobbyTitle.append(caption);

hobbyContent.append(hobbyTitle);
});

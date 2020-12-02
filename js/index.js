const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png";

const title = document.querySelector('h1');
title.textContent = 'DOM Is Awesome';

const buttonOne = document.querySelector('button');
buttonOne.textContent = 'Get Started';

const serviceLink = document.createElement("a");
serviceLink.textContent = "Services";
serviceLink.href = "#";
document.querySelector("nav").appendChild(serviceLink);

const productLink = document.createElement("a");
productLink.textContent = "Product";
productLink.href = "#";
document.querySelector("nav").appendChild(productLink);

const visionLink = document.createElement("a");
visionLink.textContent = "Vision";
visionLink.href = "#";
document.querySelector("nav").appendChild(visionLink);

const featureLink = document.createElement("a");
featureLink.textContent = "Features";
featureLink.href = "#";
document.querySelector("nav").appendChild(featureLink);

const aboutLink = document.createElement("a");
aboutLink.textContent = "About";
aboutLink.href = "#";
document.querySelector("nav").appendChild(aboutLink);

const contactLink = document.createElement("a");
contactLink.textContent = "Contact";
contactLink.href = "#";
document.querySelector("nav").appendChild(contactLink);

const featureSec = document.querySelector('.text-content:nth-of-type(1)');
const featTitle = featureSec.querySelector('h4');
const featContent = featureSec.querySelector('p');
featTitle.textContent = 'Features';
featContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const aboutSec = document.querySelector('.text-content:nth-of-type(2)');
const aboutTitle = aboutSec.querySelector('h4');
const aboutContent = aboutSec.querySelector('p');
aboutTitle.textContent = 'About';
aboutContent.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midImg = document.querySelector('.middle-img');
midImg.src = "img/mid-page-accent.jpg";

const bottomSec = document.querySelector('.bottom-content')

const serviceSec = bottomSec.querySelector('.text-content:nth-of-type(1)');
const serviceTitle = serviceSec.querySelector('h4');
const serviceContent = serviceSec.querySelector('p');
serviceTitle.textContent = 'Services';
serviceContent.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const productSec = bottomSec.querySelector('.text-content:nth-of-type(2)');
const productTitle = productSec.querySelector('h4');
const productContent = productSec.querySelector('p');
productTitle.textContent = 'Product';
productContent.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const visionSec = bottomSec.querySelector('.text-content:nth-of-type(3)');
const visionTitle = visionSec.querySelector('h4');
const visionContent = visionSec.querySelector('p');
visionTitle.textContent = 'Vision';
visionContent.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contactSec = document.querySelector('.contact');
const contactTitle = contactSec.querySelector('h4');
const contactAddress = contactSec.querySelector('p:nth-of-type(1)');
const contactPhone = contactSec.querySelector('p:nth-of-type(2)');
const contactEmail = contactSec.querySelector('p:nth-of-type(3)');
contactTitle.textContent = 'Contact';
contactAddress.textContent = '123 Way 456 Street Somewhere, USA';
contactPhone.textContent = '1 (888) 888-8888';
contactEmail.textContent = 'sales@greatidea.io';

const footSec = document.querySelector('footer');
const copyrightSec = footSec.querySelector('p');
copyrightSec.textContent = 'Copyright Great Idea! 2018';
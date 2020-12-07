// const imageUrls = [
//   "https://codepen.io/sampreet-chawla/full/LYNjMME",
//   "https://codepen.io/sampreet-chawla/full/eYZEMJB",
//   "https://codepen.io/sampreet-chawla/full/bGprLKO",
// ];

const imageUrls = [
  "smile.html",
  "curiosity.html",
  "curiosity2.html",
  "book-magic.html",
];

const url = imageUrls[Math.floor(Math.random() * imageUrls.length)];

console.log(`url : ${url}`);
window.open(url, "_self");

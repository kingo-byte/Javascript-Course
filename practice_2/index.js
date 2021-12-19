const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

let image_divs = document.querySelector("#container");

let imagesDOM = "";
imgs.forEach((element) => {
  imagesDOM += ` <img class="team-img" src="${element}">`;
});

console.log(imagesDOM);
image_divs.innerHTML = imagesDOM;

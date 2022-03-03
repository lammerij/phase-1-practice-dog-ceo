console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breedsArray;

function fetchPicture() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((data) => renderPictures(data));
}

function fetchDogBreed() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      breedsArray = Object.keys(data.message);
      renderDogBreeds(breedsArray);
    });
}

function renderPictures(pictures) {
  // console.log(pictures);
  const img = document.getElementById("dog-image-container");
  // console.log(img);
  pictures.message.forEach((picture) => {
    const images = document.createElement("img");
    images.src = picture;
    img.appendChild(images);
  });
}
// const info = document.querySelector("#dog-breeds");

function renderDogBreeds(breeds) {
  //   console.log(breeds);
  const info = document.getElementById("dog-breeds");
  //   console.log("breeds array", typeof breeds.message);
  //   let breedsArray = Object.keys(breeds.message);
  //   console.log(breedsArray);
  breeds.forEach((breed) => {
    const dogs = document.createElement("li");
    //   console.log(dogs)
    dogs.innerHTML = breed;
    // dogs.style.color = 'red'
    // console.log(dogs.src);
    // console.log(info);
    info.appendChild(dogs);
    dogs.addEventListener("click", function onClick(event) {
      event.target.style.color = "blue";
    });
  });
}

function dropDown() {
  const drop = document.getElementById("breed-dropdown");
  //   console.log(drop);
  drop.addEventListener("change", (event) => {
    let filterBreeds = breedsArray.filter(
      (breed) => breed.charAt(0) === event.target.value
    );
    // console.log(filterBreeds)
    clearUl();
    renderDogBreeds(filterBreeds);
  });
}

function clearUl() {
  let breedInfo = document.getElementById("dog-breeds");
  breedInfo.innerHTML = "";
  console.log(breedInfo);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchPicture();
  fetchDogBreed();
  dropDown();
});

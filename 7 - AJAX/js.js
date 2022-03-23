// const app = document.getElementById("app");

// // Creer element html
// const divAnimal = document.createElement('div')
// const h1 = document.createElement('h1')

// divAnimal.className = "animal"
// h1.innerHTML = "Mon titre"

// divAnimal.append(h1)
// //Ajoute dans le DOM dans #app
// app.append(divAnimal)

// h1.style.color="green"

// const animals = ["Chien", "Chat", "Oiseau", "Ver de terre"]

// animals.forEach(animal => {
//     const animalDiv = document.createElement('div')
//     animalDiv.className= "animal"
//     animalDiv.innerText = animal
//     app.append(animalDiv)
// })

// Weather API key : c21a75b667d6f7abb81f118dcf8d4611

// const temp = document.getElementById("temp");
// const form = document.getElementById("form");
// const input = document.querySelector("#form input");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   fetch(
//     'https://api.openweathermap.org/data/2.5/weather?q=' +
//       input.value +
//       '&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric&lang=fr',
//     {
//       method: "GET",
//     }
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       temp.innerHTML = "Il fait " + data.main.temp + "Degres a " + data.name;
//     })
//     .catch((error) => console.log("Erreur", error));

const lyric = document.getElementById("lyric");
const form = document.getElementById("form");
const inputSong = document.querySelector("#inputSong");
const inputArtist = document.querySelector("#inputArtist");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(
    "https://api.lyrics.ovh/v1/" + inputArtist.value + "/" + inputSong.value,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      lyric.innerHTML = data.lyrics;
    });
});

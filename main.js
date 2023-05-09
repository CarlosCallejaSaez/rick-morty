let url = "https://rickandmortyapi.com/api/character/?page=1";

async function getDataFromAPI() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const dataSliced = data.results;

    dataSliced.forEach((item) => {
      console.log(item.name);
      let container = document.querySelector(".app");
      
      container.innerHTML += `<div class="container">
      <div class="card">
        <div class="card__border">
          <img src="${item.image}" alt="card image" class="card__img" />
        </div>
  
        <h3 class="card__name">${item.name}</h3>
        <span class="card__p">Specie: ${item.species}</span>
        <p class="card__p">Status: ${item.status}</p>
        <p class="card__p">Gender: ${item.gender}</p>
  
       
       `;
      
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

getDataFromAPI();

let page = 2;
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    url = `http://rickandmortyapi.com/api/character/?page=${page++}`;

    getDataFromAPI();
    console.log(url);
  }
});

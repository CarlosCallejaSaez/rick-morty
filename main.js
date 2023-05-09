let url= "https://rickandmortyapi.com/api/character/?page=1"

async function getDataFromAPI() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const dataSliced= data.results
      
    

     dataSliced.forEach((item)=>{
        console.log(item.name)
       let container = document.querySelector(".container")
       let div= document.createElement("div")
       div.innerHTML = `<h3>${item.name}</h3>
       <img src="${item.image}" alt="${item.name}">
       `
       container.appendChild(div)

     })
      
      
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  getDataFromAPI();


  let page= 2 
  window.addEventListener('scroll',()=>{

    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
      url=`http://rickandmortyapi.com/api/character/?page=${page++}`

      getDataFromAPI();
      console.log(url)
    }
})


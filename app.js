// fetching data from api start
let url =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
let getMovie = async (url) => {
let img = "https://image.tmdb.org/t/p/w1280";
let mdata = await fetch(url);
let fdata = await mdata.json();
let result = await fdata.results;
console.log(result);

let display = document.getElementById("display");
let temp = "";
result.forEach((data) => {
  temp += `
      <div class="shadow-lg text-center w-[100%] border-2 border-emerald-500 rounded-[20px]">
          <img class="w-[100%] h-[250px] rounded-[20px]" src="${
            img + data.poster_path
          }"/>
          <h3 class="py-[10px] text-[20px] text-emerald-500 font-bold">${data.original_title}</h3>
      </div>
      `;
});
display.innerHTML = temp;
};
getMovie(url)
// fetching data from api end


// Search movie start
let searchAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let search = (e) => {
document.getElementById("display").innerHTML = `<h2 class='text-white text-center text-[30px]'>Loading..</h2>`
if (e.value != "") {
  getMovie(searchAPI + e.value);
} else {
  getMovie(api);
}
};
// Searcch movie end
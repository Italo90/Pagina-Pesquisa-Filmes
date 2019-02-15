API_KEY = "e6ccc0b90b5eca3941ebb24701d5ee72"
BASE_URL = "https://api.themoviedb.org"
base = "https://api.themoviedb.org/3"
IMAGE_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"

let list = document.querySelector('#trendings')
let titleList = document.querySelector('h1')

let trendining = new TrendingController();
trendining.setup()

function search(){
  list.innerHTML = ""
  let term = document.querySelector('#pesquisa').value;
  titleList.innerHTML = "Pesquisa: " + term
  let search = new SearchesController();
  search.setup()
}
function trending(){
  list.innerHTML = ""
  let term = document.querySelector('#pesquisa').value;
  titleList.innerHTML = "Melhores da semana"
  let trendining = new TrendingController();
  trendining.setup()
}


function favoritos(id){

  idFilme = (id);


    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            Adicionar(data);
        }
    };

    request.open("GET", base+"/movie/"+idFilme+"?api_key="+API_KEY+"&language=pt-BR", true);

    request.send();

function Adicionar(film) {
    let listDesejo = [];
    listDesejo = localStorage.getItem("Filmes Desejados");
    listDesejo = JSON.parse(listDesejo);
    if (listDesejo == null) {
        listDesejo = [];
      }
      let filme = JSON.stringify({
        id: film.id,
        title: film.title,
        poster_path: film.poster_path,
        release_date: film.release_date,
        overview: film.overview,
        vote_average: film.vote_average
    });

    listDesejo.push(filme);


    localStorage.setItem("Filmes Desejados", JSON.stringify(listDesejo));
    alert("Filme Adicionado a lista de Desejo");
    return true;
    }
}


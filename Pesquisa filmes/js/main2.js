urlImg = "https://image.tmdb.org/t/p/"

var lDesejo = localStorage.getItem("Filmes Desejados");

lDesejo =  JSON.parse(lDesejo);


var indice = -1;
var mostrar = "";
var i;

for (i in lDesejo) {
	var filme = JSON.parse(lDesejo[i]);

	mostrar += '<div class="card" style="width: 20rem;">';
  	mostrar += '<img class="img-thumbnail" alt="Imagem nÃ£o Encontrada!" src="'+urlImg+'w300/'+filme.poster_path+'">';
    mostrar += '<div class="card-body">';
    mostrar += '<h5>'+filme.title+'</h5>';
    mostrar += '<input data-toggle="modal" data-target=".bd-example-modal-lg" type="button" class="btn btn-dark" value="Assistir" onClick="assistir()">';
    mostrar += '</div>';
    mostrar += '</div>';
}
    document.getElementById('root').innerHTML = mostrar;

function assistir() {
	lDesejo.splice(indice, 1);
    localStorage.setItem("Filmes Desejados", JSON.stringify(lDesejo));
    alert("Filme Assistido com Sucesso");
    document.location.href="";
}
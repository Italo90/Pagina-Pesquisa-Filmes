class MoviesCardView {
  constructor() {
    this._trending = document.querySelector("#trendings")
  }

  render(movies) {
    var a = this._trending.innerHTML;
    for(let i = 0; i < movies.length; i ++){
      a = a + this.template(movies[i].title, movies[i].poster_path, movies[i].id)
    }
    this._trending.innerHTML = a;
  }
  
  favoritar(title, poster, id){
    let lista = [];
    lista.push[title, poster, id]
    
  }
  template(title, poster, id) {
    return "<div class='col-3 movies mb-5'>"+
            "<h5>" + title + "</h5>"+
            "<img src='" + IMAGE_URL + poster +"'><br>"+
            "<button class='btn btn-primary mt-1'onClick=favoritos('"+id+"')>Ver depois</button>"+ 
          "</div>"

  }
}





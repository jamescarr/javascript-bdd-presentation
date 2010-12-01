function Searcher(){
  this.search = function(term){
    jQuery.post('/search', {term:term}, function(cb){
      cb(term)
    })
  }
}

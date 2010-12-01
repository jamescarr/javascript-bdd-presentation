describe("Searcher", function(){
  var searcher = new Searcher();
  it("should make an ajax request for the search term", function(){
    searcher.search('Ajax Books', function(){
      console.log(arguments);
    });
  

    expect(ajaxRequests[0].url).toEqual('/search');
    expect(ajaxRequests[0].params).toEqual('term=Ajax+Books');
    expect(ajaxRequests[0].method).toEqual('POST');
  })
    
})


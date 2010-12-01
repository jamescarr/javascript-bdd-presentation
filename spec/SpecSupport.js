(function(ctx){
  var myMatchers = {
    toDisplayPlaceholder: function(expected){
      return this.actual.hasClass('placeholder')
        && this.actual.val() == expected;
    }
  };
  ctx.beforeEach(function(){
    this.addMatchers(myMatchers);
  });
})(this);

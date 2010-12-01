(function(ctx){ 
  ctx.placeholder = {
    emulate:function(input){
      var placeholder = input.attr('placeholder');
      if(placeholder){
        add(input, placeholder);
      }
      attachHandlers(input, placeholder);
    }
  }
  
  function attachHandlers(input, placeholder){
    input.focus(function(){
      if(input.val() == placeholder){
        remove(input);
      }
    }).blur(function(){
        add(input, placeholder);
    });
  
  }
  function add(input, placeholder){
    if(!input.val()){
      input.val(placeholder);
      input.addClass('placeholder');
    }
  }
  function remove(input){
    input.val('');
    input.removeClass('placeholder');
  }
})(this);

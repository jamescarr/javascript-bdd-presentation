describe("Placeholder emulator", function(){
  describe("input with no value", function(){
    var input = $('<input type="text" placeholder="Your Name"/>');
    beforeEach(function(){
      placeholder.emulate(input);
    })   
    it("should be populated with the placeholder", function(){
       expect(input).toDisplayPlaceholder('Your Name');
    })
    it("should have class 'placeholder'", function(){
      expect(input).toHaveClass('placeholder');
    })
    
    describe("focus behavior", function(){
      beforeEach(function(){
        input.focus();
      })
      it("should blank the value on focus", function(){
        expect(input).toHaveValue('');
      })
      it("should have removed the placeholder class", function(){
        expect(input).not.toHaveClass('placeholder');
      })
      describe("blur", function(){
        beforeEach(function(){
          input.blur();
        });
        it("should return placeholder class on blur", function(){
          expect(input).toHaveClass('placeholder');
        })
        it("should return the placeholder on blur", function(){
          expect(input.val()).toEqual('Your Name')
        });
      })
      
      it("should not return the placeholder with val present", function(){
        input.val('James Carr');
      
        input.blur();
      
        expect(input).toHaveValue('James Carr');
      })
    })
  })

  describe("input with existing value", function(){
    var input = $('<input value="James Carr" placeholder="Your Name">');
    beforeEach(function(){
      placeholder.emulate(input);
    })
    it("should not populate input with placeholder", function(){
      expect(input).toHaveValue('James Carr');
    })
    
  })
  
})


function laugh(num)
{
    var word='';
    for(var i=0; i<num-1; i++)
    {
      
        word = word + "ha";
        
        if(i===num-2)
        {
            word= word + 'ha!';
        }
     
    }
   return word;
}

//anonymous function

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num)
{
     var word='';
    for(var i=0; i<num-1; i++)
    {
      
        word = word + "ha";
        
        if(i===num-2)
        {
            word= word + 'ha!';
        }
     
    }
   return word; 
}
/* finish the function expression */

console.log(laugh(10));

//inline function example
/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(num)
{
   var word='';
  for(var i=0; i<num-1; i++)
  {
    
      word = word + "ha";
      
      if(i===num-2)
      {
          word= word + 'ha!';
      }
   
  }
 return word; 
});
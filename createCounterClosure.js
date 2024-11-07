var createCounter = function(init) {
    var count = init;

    return{

      increment(){
        return count = count+1;
      },

       decrement(){
       return count = count-1;
        },

      reset(){
       return count = init;
     }
    
}
}

  const counter = createCounter(5)
  console.log(counter.increment()); 
  console.log(counter.reset()); 
  console.log(counter.decrement());
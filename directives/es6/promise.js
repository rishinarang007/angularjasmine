var p = new Promise((resolve, reject)=>{

		resolve();
})

p.then(function(){

	console.log("I am resolved")
});


var p = new Promise((resolve, reject)=>{
		
  resolve(3)

});


p.then(function(data){
		
  console.log(data)

})

var p = new Promise((resolve, reject)=>{

		reject(36)
})

p.then(function(){}, function(error){
	console.log(error)
})

p.catch(function(error){
	
  console.log(error)
})

//composable
var prevPromise = new Promise(function(resolve, reject){
		
  resolve(34)
})

var newPromise = new Promise(function(resolve, reject){

	resolve(prevPromise)
})

newPromise.then(function(data){
		
  console.log(data)
})

var promise = Promise.reject(Error("oh noes"));
promise.catch(function(error){
		
  console.log(error)
})

var async = false;

var promise = new Promise(function(resolve, reject){

		resolve();
})
promise.then(function(){
	console.log(async)
})

async = true


// PROMISES CODE
function getOrder(orderId) {
  return new Promise(function(resolve, reject) {
    resolve({userId:35});
  });
}

function getUser(userId) {
  return new Promise(function(resolve, reject) {
    resolve({companyId:18});
  });
}

function getCompany(companyId) {
  return new Promise(function(resolve, reject) {
    resolve({name:'Pluralsight'});
  });
}

getOrder(23).then(function(result){
		
  return getUser(result.userId).then(function(data){
  			
    return getCompany(data.companyId).then(function(result){
    
    		console.log(result.name)
    })
  })
})

//promise ALL
function getCourse(courseId) {
  var courses = {
    3: {name: "Introduction to Introductory Courses"},
    23: {name: "Yet Another C# Course"},
    83: {name: "How to get your boss to pay for Pluralsight"}
  }
  return new Promise(function(resolve, reject) {
    resolve(courses[courseId]);
  });
}

var courseIds = [1,2,3]
var promises = [];

for(var i=0;i<courseIds.length;i++){

		promises.push(getCourse(courseIds[i]));
}


Promise.all(promises).then(function(values){
	
  console.log(values)

});

Promise.race(promises).then(function(firstValue){
	
  console.log(firstValue)

});

//use generator to clean up asynchronus code
function pause(delay) {
  setTimeout(function() {
    window.taskDone = true;
    console.log('paused');
    async.resume()
  }, delay);
}


(function() {
  var sequence;
  
  var run = function(generator){
      sequence = generator();
      var next = sequence.next();
  };
  
  function resume(value) {
    sequence.next(value);
  }
  
  // STEP ???
  function fail(reason) {
    sequence.throw(reason);
  }

  window.async = {
  	run: run,
    resume: resume,
    fail: fail
  }
}());


 window.taskDone = false;

function* main() {
      console.log('start');
      yield pause(500);
      console.log('middle');
      yield pause(500);
      console.log('end');
      
      expect(taskDone).toBe(true);
      done();
    }

async.run(main);

(function() {
  var sequence;
  
  var run = function(generator){
      sequence = generator();
      var next = sequence.next();
  };
  
  function resume(value) {
    sequence.next(value);
  }
  
  // STEP ???
  function fail(reason) {
    sequence.throw(reason);
  }
  

  window.async = {
  	run: run,
    resume: resume,
    fail: fail
  }
}());

function getStockPrice(){
	
  setTimeout(function(){
    
    try{     
     
    
      async.resume(50);
        
    }catch(ex){
    		
      async.fail(ex);
    }
    
  },500)

}

function executeTrade(){
	
  setTimeout(function(){
  		
    async.resume()
  
  }, 300)

}


function* main(){
	
  var price = yield getStockPrice();
  
  console.log(price)
  
  if(price > 45){
  		 
    yield executeTrade();
    
  } else{
    
  	console.log("trade not made")
  }
}

async.run(main)


//generator with promise
(function() {
 
  var run = function(generator){
     var sequence;
    
    var process = function(result){
    		
      result.value.then(function(value){
      		
        if(!result.done){
        		
          process(sequence.next(value))
        }
      
      }, function(error){
      	
         if(!result.done){
        		
          process(sequence.throw(error))
        }
      
      })
    }
    	
    sequence = generator();
    var next = sequence.next();
    process(next)
    
    };
  
 

  window.asyncP = {
    
  	run: run
  }
  
}());


function getStockPriceP(){
	
  return new Promise(function(resolve, reject){
  	
    setTimeout(function(){
    		
      	resolve(50);
      
    }, 300)
  
  })

}

function executeTradeP(){
	
 return new Promise(function(resolve, reject){
  	
    setTimeout(function(){
    		
      	resolve();
      
    }, 300)
    
  })
 
}


function* main(){
  
  try{
	
  var price = yield getStockPriceP();
  
  console.log(price)
  
  if(price > 45){
  		 
    yield executeTradeP();
    
  } else{
    
  	console.log("trade not made")
  }
  }catch(ex){
  		console.log(ex.message)
  }
}

asyncP.run(main)

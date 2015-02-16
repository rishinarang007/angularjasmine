let square = x => x*x

console.log(square(3))



let arr = [23,34,45,56,67];

var sum = 0;

arr.forEach( i => sum+=i)

console.log(sum) //225


var c = arr.map(n => n + 2 )

console.log(c) //25,36,47,58,69



this.name = "asdasd"

setTimeout(()=>{ //context never changes with arrow functions
           
           	console.log(this.name)
           } , 15)
           
           
//iterator low level
var num = [1,23,4,45,56]

var iterator = num.values();
var next = iterator.next();

while(!next.done){
	
  console.log("its there")
  
  next = iterator.next();
  
}

var num = [{a:1},{a:23},{a:4},{a:45},{a:56}]

var iterator = num.values();
var next = iterator.next();

while(!next.done){
	
  console.log("its there", next.value.a)
  
  
  next = iterator.next();
  
}

//for of -- similar to iterator
let numbers = [1,2,3,4];

for (let x of numbers){

	console.log(x)
}
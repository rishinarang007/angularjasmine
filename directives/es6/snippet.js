var doWork = function(){
		
  return [1,3,2]
}

let [x,y,z] = doWork();


console.log(y);


var doWork = function(){
		
  return {a:"23"}
}

let {a:ai} = doWork();


console.log(ai);

var doWork = function(){
		
  return {a:"23", handles:{twitter:"twitter"}}
}

let {a:ai, handles:{twitter: tt}} = doWork();


console.log(ai);

console.log(tt);

var doWork = function(name="rishi"){
	
  console.log(name)

}

doWork();


var doWork = function(url, {data="scott", cache = true}){

		
  return data

}


let result = doWork("asddsa", {cache: false})



console.log(result)

function doWork(name, ...restParam){

			
  console.log(restParam)

}


doWork("adssd",1,2,3,4,4,5)


//spread operator
function doWork(name,ele1,ele2){
  
  console.log(ele1, ele2)


}

doWork("sadas", ...[1,2,3,4,5,23])

var a = [1,2,3,4]

var c = [45,56,45]

var b = [5,6,7,...a,...c]

console.log(b)

let name = "django"
let x = `this is a ${name} gh`

console.log(x)

//it can use tags

let upper = function(strings, ...values){}

function upper1(string, ...nums){
		
  console.log(string) //, + , is equal to ,
  console.log(nums) //1,23,24

}

var x1 = 1;
var y = 23;

var result =  upper1`${x1} + ${y} is equal to ${x1+y}`

console.log(result)

class Employee {
  
  
  constructor(name="rishi"){
  
  	this.name = name //call the setter
  }

	
  doWork() {
  
  		return "i am at work"
  }
  
  
  doName(){
  		
    return this._name
  
  }
  
  get name(){
  
  	return this._name
  }
  
  set name(newValue){
  	this._name = newValue
  }


}


var e = new Employee("narang");
e.name = "fishy"

console.log(e.name)

class Employee {
  
  
  constructor(name="rishi"){
  
  	this.name = name //call the setter
  }

	
  doWork() {
  
  		return "i am at work"
  }
  
  
  doName(){
  		
    return this._name
  
  }
  
  get name(){
  
  	return this._name
  }
  
  set name(newValue){
  	this._name = newValue
  }


}

class Manager extends Employee{
	
  calcTax(){
  		
    return `${this._name} is manager`
  
  }

}


var e = new Employee("narang");
e.name = "fishy"

var m = new Manager("fishy");

console.log(m.calcTax())
class Company{

  constructor(){
  		
    this.employees = [];
  }
  
  addEmployees(...names){
    
   // console.log(names)
  
  	this.newArr = this.employees.concat(names);
   // console.log(this.employees)
    
  }
  
  get EmployeesArr(){
  
  		return this.newArr;
  }
  
  [Symbol.iterator](){
  		
    return new ArrayIterator(this.newArr);
  }
  
}

class ArrayIterator{
		
  constructor(array){
  		
    this.array = array;
    this.index = 0;
  }
  
  next(){
    var result = {value:undefined, done:true};
    if(this.index< this.array.length){
      	result.value = this.array[this.index];
      	result.done = false
        this.index+=1
    }
    
    return result
  }
}


var e = new Company();


e.addEmployees("asd","asd","qwe","asdasd")

let count = 0;

for (let employee of e){
	
  count+=1
}

console.log(count)